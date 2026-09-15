(() => {
  const BASE = "assets/";

  const SLOTS = {
    "hp2-kennis-1":       { src: "brand-meeting.png",  position: "50% 30%" },
    "hp2-kennis-2":       { src: "photo-4.png",        position: "50% 40%" },
    "hp2-kennis-3":       { src: "brand-highfive.png", position: "50% 35%" },
    "hp2-kennis-4":       { src: "photo-2.png",        position: "50% 45%" },

    "hp2-methode-1":      { src: "photo-1.png",        position: "50% 45%" },
    "hp2-methode-2":      { src: "photo-3.png",        position: "50% 40%" },
    "hp2-methode-3":      { src: "photo-2.png",  position: "50% 30%" },
    "hp2-methode-4":      { src: "photo-4.png", position: "50% 60%" },

    "hp2-talent-portret": { src: "brand-portrait.png", position: "50% 20%" },

    "hp2-sector-1":       { src: "brand-highfive.png",  position: "50% 30%" },
    "hp2-sector-2":       { src: "brand-meeting.png",        position: "50% 35%" },
    "hp2-sector-3":       { src: "photo-3.png",        position: "50% 45%" },
    "hp2-sector-4":       { src: "photo-1.png",        position: "50% 50%" },
    "hp2-sector-5":       { src: "photo-2.png", position: "50% 60%" },

    "hp2-boek":           { src: "brand-highfive.png",  position: "72% 26%" },
    "hp2-opleiding":      { src: "photo-3.png",        position: "50% 40%" }
  };

  const scriptUrl = document.currentScript && document.currentScript.src;
  const root = scriptUrl ? new URL(BASE, scriptUrl).href : BASE;
  const absolute = (s) => (/^(https?:|data:|blob:|\/)/.test(s) ? s : root + s);

  const SHEET = `
    :host{display:block;width:100%;height:100%;overflow:hidden;
      background:var(--tma-blue-tint,#EAF2FF)}
    :host([shape="circle"]){border-radius:var(--tma-radius-pill,999px)}
    img{width:100%;height:100%;object-fit:cover;display:block}
    .brief{display:flex;width:100%;height:100%;box-sizing:border-box;
      align-items:center;justify-content:center;text-align:center;
      padding:var(--tma-space-4,16px);
      font:700 var(--tma-fs-2xs,10px)/1.4 var(--tma-font-sans,system-ui);
      letter-spacing:.02em;text-transform:uppercase;
      color:var(--tma-text-muted,#595959)}
  `;

  class ImageSlot extends HTMLElement {
    static get observedAttributes() { return ["id", "shape", "placeholder", "src", "position"]; }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = SHEET;
      this.shadowRoot.append(style);
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }

    render() {
      const mapped = SLOTS[this.getAttribute("id")] || null;
      const src = this.getAttribute("src") || (mapped && mapped.src) || "";
      const position = this.getAttribute("position") || (mapped && mapped.position) || "50% 50%";
      const style = this.shadowRoot.firstElementChild;

      if (!src) { this.paintBrief(style); return; }

      const img = document.createElement("img");
      img.src = absolute(src);
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.style.objectPosition = position;
      img.addEventListener("error", () => this.paintBrief(style), { once: true });
      this.shadowRoot.replaceChildren(style, img);
    }

    paintBrief(style) {
      const brief = document.createElement("span");
      brief.className = "brief";
      brief.textContent = this.getAttribute("placeholder") || "Beeld volgt";
      this.shadowRoot.replaceChildren(style, brief);
    }
  }

  if (!customElements.get("image-slot")) customElements.define("image-slot", ImageSlot);
})();
