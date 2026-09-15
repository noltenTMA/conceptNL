/* @ds-bundle: {"format":4,"namespace":"TMADesignSystem_cd728b","components":[{"name":"MobileApp","sourcePath":"ui_kits/mobile-app/MobileApp.jsx"},{"name":"IOSDevice","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSStatusBar","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSNavBar","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSGlassPill","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSList","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSListRow","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"IOSKeyboard","sourcePath":"ui_kits/mobile-app/ios-frame.jsx"},{"name":"WebApp","sourcePath":"ui_kits/web-app/WebApp.jsx"}],"sourceHashes":{"ui_kits/mobile-app/MobileApp.jsx":"589c4977c86b","ui_kits/mobile-app/ios-frame.jsx":"ebadca95fe79","ui_kits/web-app/WebApp.jsx":"e2248ec3bc0a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TMADesignSystem_cd728b = window.TMADesignSystem_cd728b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/mobile-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41',
  ink
}) {
  const c = ink || (dark ? '#fff' : '#050038');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false,
  statusInk
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark,
    ink: statusInk
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
Object.assign(__ds_scope, { IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileApp.jsx
try { (() => {
const {
  useState
} = React;
function MIcon({
  name,
  size = 18,
  color = "currentColor"
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3 21a1.9 1.9 0 003.4 0"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-5-5"
    })),
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1z"
    })),
    insights: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 15l3-4 4 3 5-7"
    })),
    play: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "6 4 20 12 6 20 6 4"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21a7 7 0 0114 0"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    arrowR: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "9 6 15 12 9 18"
    })),
    cog: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.7 1.7 0 00.3 1.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4.6 9a1.7 1.7 0 00-.3-1.9"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "11",
      width: "14",
      height: "10",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11V7a4 4 0 018 0v4"
    })),
    star: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15 9 22 10 17 15 18 22 12 19 6 22 7 15 2 10 9 9 12 2"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 3 14 8 19 8"
    })),
    bolt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    })),
    heart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20.8 4.6a5 5 0 00-7 0L12 6.3l-1.8-1.7a5 5 0 00-7 7l8.8 8.8 8.8-8.8a5 5 0 000-7z"
    })),
    help: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "17.01"
    })),
    logout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[name] || null);
}
function Statusbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 56,
      zIndex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "0 24px 6px",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "#050038"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      alignItems: "center",
      color: "#050038"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "4",
    rx: "0.6",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5",
    width: "3",
    height: "6",
    rx: "0.6",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: "0.6",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "0.6",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "11",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3C10.8 3 12.9 4 14.4 5.5L15.5 4.4C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.4L2.6 5.5C4.1 4 6.2 3 8.5 3Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10",
    r: "1.4",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "11",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3",
    stroke: "currentColor",
    strokeOpacity: "0.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "18",
    height: "9",
    rx: "2",
    fill: "currentColor"
  }))));
}
function Header({
  title,
  leading,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-m-header tma-m-safe",
    style: {
      paddingTop: 60
    }
  }, leading ?? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, title ?? ""), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-headicons"
  }, trailing ?? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "tma-m-iconbtn"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "tma-m-iconbtn",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 7,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#2183FA",
      border: "1.5px solid #fff"
    }
  })))));
}
function TabBar({
  active,
  onChange
}) {
  const items = [{
    id: "home",
    icon: "home",
    label: "Home"
  }, {
    id: "insights",
    icon: "insights",
    label: "Insights"
  }, {
    id: "analysis",
    icon: "play",
    label: "Analyse"
  }, {
    id: "team",
    icon: "users",
    label: "Team"
  }, {
    id: "menu",
    icon: "menu",
    label: "Menu"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-m-tabbar"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "tma-m-tab " + (active === it.id ? "is-active" : ""),
    onClick: () => onChange(it.id)
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: it.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}
function HomeScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-hello"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hi"
  }, "Welcome"), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, "Steven")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-quick"
  }, [{
    icon: "play",
    label: "Start\nanalysis"
  }, {
    icon: "star",
    label: "My\ntalents"
  }, {
    icon: "file",
    label: "Reports"
  }, {
    icon: "users",
    label: "Team"
  }].map(q => /*#__PURE__*/React.createElement("div", {
    key: q.label,
    className: "tma-m-quick-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-quick-icon"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: q.icon,
    size: 18,
    color: "#2183FA"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "pre-line"
    }
  }, q.label)))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-feature"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/learning-1.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-feature-title"
  }, "Mijn leer- en", /*#__PURE__*/React.createElement("br", null), "ontwikkelstijl"), /*#__PURE__*/React.createElement("button", {
    className: "tma-m-feature-play"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "arrowR",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-section-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Your talents"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-list"
  }, [{
    t: "Zelfredzaam",
    d: "Jij bent van nature een zelfstandig persoon die goed kan functioneren zonder hulp.",
    c: "#2183FA",
    i: "ZR"
  }, {
    t: "Doelgericht",
    d: "Je richt je energie op heldere doelen en werkt systematisch naar een resultaat toe.",
    c: "#49BC87",
    i: "DG"
  }, {
    t: "Ondernemend",
    d: "Je herkent kansen voordat anderen dat doen en hebt de daadkracht om ze te grijpen.",
    c: "#F07B58",
    i: "ON"
  }, {
    t: "Sociaal",
    d: "Contact maken met mensen gaat je gemakkelijk af. Je stelt anderen snel op hun gemak.",
    c: "#FBB401",
    i: "SO"
  }].map(row => /*#__PURE__*/React.createElement("div", {
    key: row.t,
    className: "tma-m-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-tile-pill",
    style: {
      background: row.c
    }
  }, row.i), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-tile-body"
  }, /*#__PURE__*/React.createElement("h4", null, row.t), /*#__PURE__*/React.createElement("p", null, row.d)), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 14,
    color: "#B8B8B8"
  }))))));
}
function InsightsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-hello"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hi"
  }, "Team"), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-stat-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Active candidates"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "248"), /*#__PURE__*/React.createElement("span", {
    className: "delta"
  }, "\u25B2 12 this week")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Team match"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "82%"), /*#__PURE__*/React.createElement("span", {
    className: "delta"
  }, "\u25B2 +3 pts")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Analyses done"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "1,204"), /*#__PURE__*/React.createElement("span", {
    className: "delta"
  }, "\u25B2 8% MoM")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Open invites"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "37"), /*#__PURE__*/React.createElement("span", {
    className: "delta",
    style: {
      color: "#D1615B"
    }
  }, "\u25BC 4 expiring"))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-chart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-chart-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Talent distribution"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "on"
  }, "Week"), /*#__PURE__*/React.createElement("div", null, "Month"), /*#__PURE__*/React.createElement("div", null, "Year"))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-bars"
  }, [45, 68, 52, 90, 72, 58, 82].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bar " + (h > 80 ? "hi" : ""),
    style: {
      height: h + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-bar-labels"
  }, ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-section-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Top candidates"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "See all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-list"
  }, [{
    name: "Anton Philips",
    role: "Account manager",
    score: 92,
    color: "#7FBA00"
  }, {
    name: "Audrey Hepburn",
    role: "Communications lead",
    score: 88,
    color: "#F07B58"
  }, {
    name: "Johan Cruyff",
    role: "Team coach",
    score: 85,
    color: "#2183FA"
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "tma-m-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-tile-pill",
    style: {
      background: p.color
    }
  }, p.name.split(" ").map(n => n[0]).join("")), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-tile-body"
  }, /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("p", null, p.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#2183FA"
    }
  }, p.score, "%"))))));
}
function MenuScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: "Menu",
    trailing: /*#__PURE__*/React.createElement("button", {
      className: "tma-m-iconbtn"
    }, /*#__PURE__*/React.createElement(MIcon, {
      name: "cog",
      size: 16
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-scroll",
    style: {
      padding: 0,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-avatar"
  }, "SV"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Steven van Dijk"), /*#__PURE__*/React.createElement("p", null, "HR Business Partner \xB7 Utrecht")), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 14,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "star",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "My talents"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "file",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "Reports"), /*#__PURE__*/React.createElement("span", {
    className: "tma-m-tag"
  }, "12"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "bolt",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "Development plan"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "users",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "My team"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "bell",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "Notifications"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "lock",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "Privacy & security"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "help",
    size: 18,
    color: "#2183FA"
  }), /*#__PURE__*/React.createElement("span", null, "Help centre"), /*#__PURE__*/React.createElement(MIcon, {
    name: "chev",
    size: 13,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-m-menu-row"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "logout",
    size: 18,
    color: "#D1615B"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#D1615B"
    }
  }, "Log out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11,
      color: "var(--tma-text-disabled)",
      marginTop: 20
    }
  }, "TMA \xB7 v4.2.1")));
}
function Phone({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "phone-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.IOSDevice, {
    width: 360,
    height: 740
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-m",
    style: {
      height: "100%"
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "phone-caption"
  }, label));
}
function MobileApp() {
  const [active, setActive] = useState("home");
  return /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, /*#__PURE__*/React.createElement(Phone, {
    label: "Home"
  }, /*#__PURE__*/React.createElement(HomeScreen, null), /*#__PURE__*/React.createElement(TabBar, {
    active: "home",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Phone, {
    label: "Insights"
  }, /*#__PURE__*/React.createElement(InsightsScreen, null), /*#__PURE__*/React.createElement(TabBar, {
    active: "insights",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Phone, {
    label: "Menu"
  }, /*#__PURE__*/React.createElement(MenuScreen, null), /*#__PURE__*/React.createElement(TabBar, {
    active: "menu",
    onChange: () => {}
  })));
}
Object.assign(window, {
  TMAMobileApp: MobileApp,
  MobileApp
});
Object.assign(__ds_scope, { MobileApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/WebApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const NAV = [{
  id: "home",
  label: "Home",
  icon: "home"
}, {
  id: "analysis",
  label: "Start analysis",
  icon: "play"
}, {
  id: "insights",
  label: "Insights",
  icon: "chart"
}, {
  id: "matching",
  label: "Matching",
  icon: "star"
}, {
  id: "management",
  label: "Management",
  icon: "users"
}, {
  id: "settings",
  label: "Settings",
  icon: "cog"
}];
function Icon({
  name,
  size = 16,
  color = "currentColor"
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1z"
    })),
    play: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "6 4 20 12 6 20 6 4"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 15l3-4 4 3 5-7"
    })),
    star: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15 9 22 10 17 15 18 22 12 19 6 22 7 15 2 10 9 9 12 2"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21a7 7 0 0114 0"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 21a7 7 0 016-4"
    })),
    cog: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3h.1a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9v.1a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-5-5"
    })),
    chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3 21a1.9 1.9 0 003.4 0"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[name] || null);
}
function TopBar({
  user
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "tma-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-topbar-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-tma.png",
    alt: "TMA"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-topbar-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    color: "#595959"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search candidates, competences, reports\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-topbar-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tma-iconbtn",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "tma-dot-badge"
  }, "3")), /*#__PURE__*/React.createElement("div", {
    className: "tma-avatar"
  }, /*#__PURE__*/React.createElement("span", null, "SV"))));
}
function SideNav({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "tma-sidenav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-sidenav-inner"
  }, NAV.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    className: "tma-navrow " + (active === item.id ? "is-active" : ""),
    onClick: () => onNavigate(item.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement(Icon, {
    name: "chev",
    size: 10
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tma-sidenav-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-pro-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-pro-title"
  }, "Happy People,", /*#__PURE__*/React.createElement("br", null), "Performing Organizations"), /*#__PURE__*/React.createElement("button", {
    className: "tma-btn tma-btn-secondary"
  }, "Learn more"))));
}
function PhotoCard({
  title,
  img
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-photocard"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "tma-photocard-overlay"
  }), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("button", {
    className: "tma-photocard-play",
    "aria-label": "Open"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 14,
    color: "#050038"
  })));
}
function TalentCard({
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-card-eyebrow"
  }, "Talent"), /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, body), /*#__PURE__*/React.createElement("a", {
    className: "tma-link",
    href: "#"
  }, "Bekijk details ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
}
function StatCard({
  label,
  value,
  delta,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-stat-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tma-stat-value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "tma-stat-delta " + (trend === "up" ? "up" : "down")
  }, trend === "up" ? "▲" : "▼", " ", delta));
}
const TALENTS = [{
  title: "Zelfredzaam",
  body: "Jij bent van nature een zelfstandig persoon die zonder hulp en begeleiding goed kan functioneren."
}, {
  title: "Doelgericht",
  body: "Je richt je energie op heldere doelen en werkt systematisch toe naar een resultaat dat je voor ogen hebt."
}, {
  title: "Ondernemend",
  body: "Je herkent kansen voordat anderen dat doen en hebt de daadkracht om ze vervolgens te grijpen."
}, {
  title: "Sociaal",
  body: "Contact maken met mensen gaat je gemakkelijk af. Je stelt anderen snel op hun gemak."
}];
function HomeView() {
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-hello"
  }, /*#__PURE__*/React.createElement("span", null, "Welcome"), /*#__PURE__*/React.createElement("h1", null, "Steven")), /*#__PURE__*/React.createElement("div", {
    className: "tma-stats-row"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Active candidates",
    value: "248",
    delta: "12 this week",
    trend: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Analyses completed",
    value: "1,204",
    delta: "8% vs last month",
    trend: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open invites",
    value: "37",
    delta: "4 expiring",
    trend: "down"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Team match score",
    value: "82%",
    delta: "+3 pts",
    trend: "up"
  })), /*#__PURE__*/React.createElement("section", {
    className: "tma-section"
  }, /*#__PURE__*/React.createElement("header", {
    className: "tma-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Featured for you"), /*#__PURE__*/React.createElement("a", {
    className: "tma-link",
    href: "#"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "tma-photo-grid"
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Mijn leer- en", /*#__PURE__*/React.createElement("br", null), "ontwikkelstijl"),
    img: "../../assets/imagery/learning-1.png"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    title: "Talentenoverzicht",
    img: "../../assets/imagery/talent-overview-1.png"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Interview", /*#__PURE__*/React.createElement("br", null), "preparation"),
    img: "../../assets/imagery/learning-2.png"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "tma-section"
  }, /*#__PURE__*/React.createElement("header", {
    className: "tma-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Your talents"), /*#__PURE__*/React.createElement("div", {
    className: "tma-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tma-tab is-active"
  }, "On the line"), /*#__PURE__*/React.createElement("button", {
    className: "tma-tab"
  }, "Ranking"), /*#__PURE__*/React.createElement("button", {
    className: "tma-tab"
  }, "Drive"))), /*#__PURE__*/React.createElement("div", {
    className: "tma-talent-grid"
  }, TALENTS.map(t => /*#__PURE__*/React.createElement(TalentCard, _extends({
    key: t.title
  }, t))))));
}
function AnalysisView() {
  const [step, setStep] = useState(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-hello"
  }, /*#__PURE__*/React.createElement("span", null, "Start"), /*#__PURE__*/React.createElement("h1", null, "New analysis")), /*#__PURE__*/React.createElement("div", {
    className: "tma-stepper"
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "tma-step " + (step >= n ? "is-done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-step-pill"
  }, step > n ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#fff"
  }) : n), /*#__PURE__*/React.createElement("span", null, ["Candidate", "Competences", "Context", "Send"][n - 1])))), /*#__PURE__*/React.createElement("div", {
    className: "tma-panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Select competences"), /*#__PURE__*/React.createElement("p", {
    className: "tma-muted"
  }, "Pick up to 12 competences that best match the role."), /*#__PURE__*/React.createElement("div", {
    className: "tma-chip-cloud"
  }, ["Creativity", "Service oriented", "Problem solving", "Leadership", "Self-reliance", "Sociability", "Result oriented", "Decisiveness", "Stress resistance", "Empathy", "Discipline", "Adaptability", "Planning", "Energy"].map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "tma-chip " + (i < 4 ? "is-selected" : "")
  }, i < 4 && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    color: "#2183FA"
  }), " ", c))), /*#__PURE__*/React.createElement("div", {
    className: "tma-panel-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tma-btn tma-btn-secondary",
    onClick: () => setStep(Math.max(1, step - 1))
  }, "Herstel"), /*#__PURE__*/React.createElement("button", {
    className: "tma-btn tma-btn-primary",
    onClick: () => setStep(Math.min(4, step + 1))
  }, "Continue ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 12,
    color: "#fff"
  })))));
}
function InsightsView() {
  const people = [{
    name: "Anton Philips",
    role: "Account manager",
    score: 92,
    color: "#7FBA00"
  }, {
    name: "Audrey Hepburn",
    role: "Communications lead",
    score: 88,
    color: "#F07B58"
  }, {
    name: "Johan Cruyff",
    role: "Team coach",
    score: 85,
    color: "#2183FA"
  }, {
    name: "Willem Drees",
    role: "HR business partner",
    score: 79,
    color: "#D34893"
  }, {
    name: "Maria Montessori",
    role: "Coach & mentor",
    score: 77,
    color: "#49BC87"
  }, {
    name: "Vincent van Gogh",
    role: "Creative strategist",
    score: 74,
    color: "#FBB401"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-hello"
  }, /*#__PURE__*/React.createElement("span", null, "Team"), /*#__PURE__*/React.createElement("h1", null, "Insights")), /*#__PURE__*/React.createElement("div", {
    className: "tma-filter-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 13,
    color: "#595959"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search candidate",
    defaultValue: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-field"
  }, /*#__PURE__*/React.createElement("span", null, "Select organisation"), /*#__PURE__*/React.createElement(Icon, {
    name: "chev",
    size: 11,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-field"
  }, /*#__PURE__*/React.createElement("span", null, "All competences"), /*#__PURE__*/React.createElement(Icon, {
    name: "chev",
    size: 11,
    color: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("button", {
    className: "tma-btn tma-btn-secondary"
  }, "Export CSV")), /*#__PURE__*/React.createElement("div", {
    className: "tma-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-tr head"
  }, /*#__PURE__*/React.createElement("div", null, "Name"), /*#__PURE__*/React.createElement("div", null, "Role"), /*#__PURE__*/React.createElement("div", null, "Talents"), /*#__PURE__*/React.createElement("div", null, "Match"), /*#__PURE__*/React.createElement("div", null)), people.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "tma-tr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tma-avatar sm",
    style: {
      background: p.color + "22",
      color: p.color
    }
  }, p.name.split(" ").map(n => n[0]).join("")), /*#__PURE__*/React.createElement("span", null, p.name)), /*#__PURE__*/React.createElement("div", {
    className: "tma-muted"
  }, p.role), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tma-tag"
  }, "Leadership"), /*#__PURE__*/React.createElement("span", {
    className: "tma-tag"
  }, "Empathy")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tma-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: p.score + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "tma-stat-mini"
  }, p.score, "%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "tma-iconbtn sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chev",
    size: 12
  })))))));
}
function WebApp() {
  const [active, setActive] = useState("home");
  const view = active === "home" ? /*#__PURE__*/React.createElement(HomeView, null) : active === "analysis" ? /*#__PURE__*/React.createElement(AnalysisView, null) : active === "insights" ? /*#__PURE__*/React.createElement(InsightsView, null) : /*#__PURE__*/React.createElement(HomeView, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "tma-app"
  }, /*#__PURE__*/React.createElement(TopBar, {
    user: {
      name: "Steven van Dijk"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tma-layout"
  }, /*#__PURE__*/React.createElement(SideNav, {
    active: active,
    onNavigate: setActive
  }), /*#__PURE__*/React.createElement("main", {
    className: "tma-main"
  }, view)));
}
Object.assign(window, {
  TMAWebApp: WebApp,
  WebApp
});
Object.assign(__ds_scope, { WebApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/WebApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MobileApp = __ds_scope.MobileApp;

__ds_ns.IOSDevice = __ds_scope.IOSDevice;

__ds_ns.IOSStatusBar = __ds_scope.IOSStatusBar;

__ds_ns.IOSNavBar = __ds_scope.IOSNavBar;

__ds_ns.IOSGlassPill = __ds_scope.IOSGlassPill;

__ds_ns.IOSList = __ds_scope.IOSList;

__ds_ns.IOSListRow = __ds_scope.IOSListRow;

__ds_ns.IOSKeyboard = __ds_scope.IOSKeyboard;

__ds_ns.WebApp = __ds_scope.WebApp;

})();
