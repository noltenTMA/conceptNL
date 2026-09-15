/* ═══════════════════════════════════════════════════════════════
   <tabler-icon> — TMA's icon primitive.

   Tabler Icons (MIT). Stroke-based: fill:none + stroke:currentColor,
   so an icon always takes its parent's text colour.

     <tabler-icon name="home"></tabler-icon>
     <tabler-icon name="chart-line" size="20"></tabler-icon>
     <tabler-icon name="star" size="14" stroke="1.5"></tabler-icon>
     <tabler-icon name="player-play" variant="filled"></tabler-icon>

   Attributes
     name     Tabler icon name (kebab-case), e.g. "chevron-down"
     size     px, default 20
     stroke   stroke-width, default 1.75 (TMA house setting)
     variant  "outline" (default) | "filled"

   ── Resolution order ──────────────────────────────────────────
   1. LOCAL_BASE  — assets/icons/<variant>/<name>.svg
   2. CDN_BASE    — unpkg.com/@tabler/icons@3/icons/<variant>/<name>.svg

   Local wins when present, so dropping Tabler's `icons/` tree into
   assets/icons/ makes the whole system self-contained with no code
   change. Needed for offline / standalone-HTML export: the bundler
   inlines static file references, not runtime fetches.
   ═══════════════════════════════════════════════════════════════ */

(() => {
  const LOCAL_BASE = "assets/icons";
  const CDN_BASE   = "https://unpkg.com/@tabler/icons@3/icons";

  // Resolve LOCAL_BASE against this script's own URL so it works from
  // any nesting depth (preview/, ui_kits/web-app/, brand-guidelines/).
  const scriptUrl = document.currentScript && document.currentScript.src;
  const localRoot = scriptUrl
    ? new URL("../" + LOCAL_BASE + "/", scriptUrl).href
    : LOCAL_BASE + "/";

  const cache = new Map();

  function load(name, variant) {
    const key = `${variant}/${name}`;
    if (!cache.has(key)) {
      const local = `${localRoot}${variant}/${name}.svg`;
      const cdn   = `${CDN_BASE}/${variant}/${name}.svg`;
      cache.set(key,
        fetch(local)
          .then(r => (r.ok ? r.text() : Promise.reject()))
          .catch(() => fetch(cdn).then(r => {
            if (!r.ok) throw new Error(`tabler-icon: unknown icon "${key}"`);
            return r.text();
          }))
      );
    }
    return cache.get(key);
  }

  class TablerIcon extends HTMLElement {
    static get observedAttributes() { return ["name", "size", "stroke", "variant"]; }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }

    async render() {
      const name    = this.getAttribute("name");
      const size    = this.getAttribute("size")    || 20;
      const stroke  = this.getAttribute("stroke")  || 1.75;
      const variant = this.getAttribute("variant") || "outline";

      Object.assign(this.style, {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        width: `${size}px`,
        height: `${size}px`,
        color: "inherit",
      });

      if (!name) return;

      try {
        this.innerHTML = await load(name, variant);
        const svg = this.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.display = "block";
        if (variant === "filled") {
          svg.setAttribute("fill", "currentColor");
          svg.removeAttribute("stroke");
        } else {
          svg.setAttribute("fill", "none");
          svg.setAttribute("stroke", "currentColor");
          svg.setAttribute("stroke-width", stroke);
        }
      } catch (e) {
        this.innerHTML = "";
        console.warn(e.message);
      }
    }
  }

  if (!customElements.get("tabler-icon")) {
    customElements.define("tabler-icon", TablerIcon);
  }
})();
