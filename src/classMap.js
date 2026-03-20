// classMap.js
// Scale: i * 0.25rem — so kata-p-4 = 1rem, kata-p-1 = 0.25rem
// Max scale: 96 (= 24rem / 384px)

export const classMap = {};

// spacing scale
const scale = {};
const spacing = 0.25;
for (let i = 0; i <= 96; i++) {
  scale[i] = `${i * spacing}rem`;
}

//#region Padding

for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-p-${k}`] = `padding: ${v};`;
  classMap[`kata-pt-${k}`] = `padding-top: ${v};`;
  classMap[`kata-pb-${k}`] = `padding-bottom: ${v};`;
  classMap[`kata-pl-${k}`] = `padding-left: ${v};`;
  classMap[`kata-pr-${k}`] = `padding-right: ${v};`;
  classMap[`kata-px-${k}`] = `padding-left: ${v}; padding-right: ${v};`;
  classMap[`kata-py-${k}`] = `padding-top: ${v}; padding-bottom: ${v};`;
}
//#endregion


//#region margin

for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-m-${k}`] = `margin: ${v};`;
  classMap[`kata-mt-${k}`] = `margin-top: ${v};`;
  classMap[`kata-mb-${k}`] = `margin-bottom: ${v};`;
  classMap[`kata-ml-${k}`] = `margin-left: ${v};`;
  classMap[`kata-mr-${k}`] = `margin-right: ${v};`;
  classMap[`kata-mx-${k}`] = `margin-left: ${v}; margin-right: ${v};`;
  classMap[`kata-my-${k}`] = `margin-top: ${v}; margin-bottom: ${v};`;
}
classMap["kata-m-auto"] = "margin: auto;";
classMap["kata-mx-auto"] = "margin-left: auto; margin-right: auto;";
classMap["kata-my-auto"] = "margin-top: auto; margin-bottom: auto;";
classMap["kata-ml-auto"] = "margin-left: auto;";
classMap["kata-mr-auto"] = "margin-right: auto;";
classMap["kata-mt-auto"] = "margin-top: auto;";
classMap["kata-mb-auto"] = "margin-bottom: auto;";
//#endregion


//#region width

for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-w-${k}`] = `width: ${v};`;
}
classMap["kata-w-auto"] = "width: auto;";
classMap["kata-w-full"] = "width: 100%;";
classMap["kata-w-half"] = "width: 50%;";
classMap["kata-w-screen"] = "width: 100vw;";
classMap["kata-w-min"] = "width: min-content;";
classMap["kata-w-max"] = "width: max-content;";
classMap["kata-w-fit"] = "width: fit-content;";
//#endregion


//#region height

for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-h-${k}`] = `height: ${v};`;
}
classMap["kata-h-auto"] = "height: auto;";
classMap["kata-h-full"] = "height: 100%;";
classMap["kata-h-half"] = "height: 50%;";
classMap["kata-h-screen"] = "height: 100vh;";
classMap["kata-h-min"] = "height: min-content;";
classMap["kata-h-max"] = "height: max-content;";
classMap["kata-h-fit"] = "height: fit-content;";
//#endregion


//#region box sizing

classMap["kata-box-border"] = "box-sizing: border-box;";
classMap["kata-box-content"] = "box-sizing: content-box;";
//#endregion


//#region display

classMap["kata-block"] = "display: block;";
classMap["kata-inline"] = "display: inline;";
classMap["kata-inline-block"] = "display: inline-block;";
classMap["kata-flex"] = "display: flex;";
classMap["kata-inline-flex"] = "display: inline-flex;";
classMap["kata-grid"] = "display: grid;";
classMap["kata-inline-grid"] = "display: inline-grid;";
classMap["kata-hidden"] = "display: none;";
classMap["kata-contents"] = "display: contents;";
//#endregion


//#region flex

classMap["kata-flex-row"] = "flex-direction: row;";
classMap["kata-flex-row-reverse"] = "flex-direction: row-reverse;";
classMap["kata-flex-col"] = "flex-direction: column;";
classMap["kata-flex-col-reverse"] = "flex-direction: column-reverse;";
classMap["kata-flex-wrap"] = "flex-wrap: wrap;";
classMap["kata-flex-wrap-reverse"] = "flex-wrap: wrap-reverse;";
classMap["kata-flex-nowrap"] = "flex-wrap: nowrap;";
classMap["kata-justify-start"] = "justify-content: flex-start;";
classMap["kata-justify-end"] = "justify-content: flex-end;";
classMap["kata-justify-center"] = "justify-content: center;";
classMap["kata-justify-between"] = "justify-content: space-between;";
classMap["kata-justify-around"] = "justify-content: space-around;";
classMap["kata-justify-evenly"] = "justify-content: space-evenly;";
classMap["kata-items-start"] = "align-items: flex-start;";
classMap["kata-items-end"] = "align-items: flex-end;";
classMap["kata-items-center"] = "align-items: center;";
classMap["kata-items-baseline"] = "align-items: baseline;";
classMap["kata-items-stretch"] = "align-items: stretch;";
//#endregion


//#region gap
for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-gap-${k}`] = `gap: ${v};`;
  classMap[`kata-gap-x-${k}`] = `column-gap: ${v};`;
  classMap[`kata-gap-y-${k}`] = `row-gap: ${v};`;
}
//#endregion


//#region position

classMap["kata-static"] = "position: static;";
classMap["kata-relative"] = "position: relative;";
classMap["kata-absolute"] = "position: absolute;";
classMap["kata-fixed"] = "position: fixed;";
classMap["kata-sticky"] = "position: sticky;";

for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-top-${k}`] = `top: ${v};`;
  classMap[`kata-right-${k}`] = `right: ${v};`;
  classMap[`kata-bottom-${k}`] = `bottom: ${v};`;
  classMap[`kata-left-${k}`] = `left: ${v};`;
}
classMap["kata-top-auto"] = "top: auto;";
classMap["kata-right-auto"] = "right: auto;";
classMap["kata-bottom-auto"] = "bottom: auto;";
classMap["kata-left-auto"] = "left: auto;";
classMap["kata-inset-0"] = "top: 0; right: 0; bottom: 0; left: 0;";
classMap["kata-inset-auto"] =
  "top: auto; right: auto; bottom: auto; left: auto;";
//#endregion


//#region z-index

for (let i = 0; i <= 96; i++) {
  classMap[`kata-z-${i}`] = `z-index: ${i};`;
}
classMap["kata-z-auto"] = "z-index: auto;";
//#endregion


//#region font-family

classMap["kata-font-sans"] =
  "font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;";
classMap["kata-font-serif"] = "font-family: ui-serif, Georgia, Cambria, serif;";
classMap["kata-font-mono"] =
  "font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;";
//#endregion

//#region font size
classMap["kata-text-xs"] = "font-size: 0.75rem; line-height: 1rem;";
classMap["kata-text-sm"] = "font-size: 0.875rem; line-height: 1.25rem;";
classMap["kata-text-base"] = "font-size: 1rem; line-height: 1.5rem;";
classMap["kata-text-lg"] = "font-size: 1.125rem; line-height: 1.75rem;";
classMap["kata-text-xl"] = "font-size: 1.25rem; line-height: 1.75rem;";
classMap["kata-text-2xl"] = "font-size: 1.5rem; line-height: 2rem;";
classMap["kata-text-3xl"] = "font-size: 1.875rem; line-height: 2.25rem;";
classMap["kata-text-4xl"] = "font-size: 2.25rem; line-height: 2.5rem;";
classMap["kata-text-5xl"] = "font-size: 3rem; line-height: 1;";
classMap["kata-text-6xl"] = "font-size: 3.75rem; line-height: 1;";

//#endregion

//#region font-weight

classMap["kata-font-thin"] = "font-weight: 100;";
classMap["kata-font-extralight"] = "font-weight: 200;";
classMap["kata-font-light"] = "font-weight: 300;";
classMap["kata-font-normal"] = "font-weight: 400;";
classMap["kata-font-medium"] = "font-weight: 500;";
classMap["kata-font-semibold"] = "font-weight: 600;";
classMap["kata-font-bold"] = "font-weight: 700;";
classMap["kata-font-extrabold"] = "font-weight: 800;";
classMap["kata-font-black"] = "font-weight: 900;";
//#endregion


//#region font-style

classMap["kata-italic"] = "font-style: italic;";
classMap["kata-not-italic"] = "font-style: normal;";

//#endregion

//#region text-align

classMap["kata-text-left"] = "text-align: left;";
classMap["kata-text-center"] = "text-align: center;";
classMap["kata-text-right"] = "text-align: right;";
classMap["kata-text-justify"] = "text-align: justify;";
classMap["kata-text-start"] = "text-align: start;";
classMap["kata-text-end"] = "text-align: end;";
//#endregion

//#region text decoration

classMap["kata-underline"] = "text-decoration-line: underline;";
classMap["kata-overline"] = "text-decoration-line: overline;";
classMap["kata-line-through"] = "text-decoration-line: line-through;";
classMap["kata-no-underline"] = "text-decoration: none;";
classMap["kata-decoration-solid"] = "text-decoration-style: solid;";
classMap["kata-decoration-dashed"] = "text-decoration-style: dashed;";
classMap["kata-decoration-dotted"] = "text-decoration-style: dotted;";
classMap["kata-decoration-double"] = "text-decoration-style: double;";
classMap["kata-decoration-wavy"] = "text-decoration-style: wavy;";
//#endregion



//#region line-height

classMap["kata-leading-none"] = "line-height: 1;";
classMap["kata-leading-tight"] = "line-height: 1.25;";
classMap["kata-leading-snug"] = "line-height: 1.375;";
classMap["kata-leading-normal"] = "line-height: 1.5;";
classMap["kata-leading-relaxed"] = "line-height: 1.625;";
classMap["kata-leading-loose"] = "line-height: 2;";
//#endregion


//#region letter-spacing

classMap["kata-tracking-tighter"] = "letter-spacing: -0.05em;";
classMap["kata-tracking-tight"] = "letter-spacing: -0.025em;";
classMap["kata-tracking-normal"] = "letter-spacing: 0em;";
classMap["kata-tracking-wide"] = "letter-spacing: 0.025em;";
classMap["kata-tracking-wider"] = "letter-spacing: 0.05em;";
classMap["kata-tracking-widest"] = "letter-spacing: 0.1em;";
//#endregion


//#region color

const colors = {
  black: "#000000",
  white: "#ffffff",
  transparent: "transparent",
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  "red-100": "#fee2e2",
  "red-300": "#fca5a5",
  "red-500": "#ef4444",
  "red-700": "#b91c1c",
  "red-900": "#7f1d1d",
  "orange-100": "#ffedd5",
  "orange-300": "#fdba74",
  "orange-500": "#f97316",
  "orange-700": "#c2410c",
  "yellow-100": "#fef9c3",
  "yellow-300": "#fde047",
  "yellow-500": "#eab308",
  "yellow-700": "#a16207",
  "green-100": "#dcfce7",
  "green-300": "#86efac",
  "green-500": "#22c55e",
  "green-700": "#15803d",
  "green-900": "#14532d",
  "teal-100": "#ccfbf1",
  "teal-300": "#5eead4",
  "teal-500": "#14b8a6",
  "teal-700": "#0f766e",
  "blue-100": "#dbeafe",
  "blue-300": "#93c5fd",
  "blue-500": "#3b82f6",
  "blue-700": "#1d4ed8",
  "blue-900": "#1e3a8a",
  "indigo-100": "#e0e7ff",
  "indigo-300": "#a5b4fc",
  "indigo-500": "#6366f1",
  "indigo-700": "#4338ca",
  "purple-100": "#f3e8ff",
  "purple-300": "#d8b4fe",
  "purple-500": "#a855f7",
  "purple-700": "#7e22ce",
  "pink-100": "#fce7f3",
  "pink-300": "#f9a8d4",
  "pink-500": "#ec4899",
  "pink-700": "#be185d",
};

for (const [k, v] of Object.entries(colors)) {
  classMap[`kata-text-${k}`] = `color: ${v};`;
  classMap[`kata-bg-${k}`] = `background-color: ${v};`;
  classMap[`kata-border-${k}`] = `border-color: ${v};`;
}
//#endregion


//#region bg options

classMap["kata-bg-none"] = "background: none;";
classMap["kata-bg-cover"] = "background-size: cover;";
classMap["kata-bg-contain"] = "background-size: contain;";
classMap["kata-bg-center"] = "background-position: center;";
classMap["kata-bg-top"] = "background-position: top;";
classMap["kata-bg-bottom"] = "background-position: bottom;";
classMap["kata-bg-no-repeat"] = "background-repeat: no-repeat;";
classMap["kata-bg-repeat"] = "background-repeat: repeat;";

//#endregion

//#region border

classMap["kata-border-0"] = "border-width: 0;";
classMap["kata-border"] = "border-width: 1px;";
classMap["kata-border-2"] = "border-width: 2px;";
classMap["kata-border-4"] = "border-width: 4px;";
classMap["kata-border-8"] = "border-width: 8px;";
classMap["kata-border-t"] = "border-top-width: 1px;";
classMap["kata-border-r"] = "border-right-width: 1px;";
classMap["kata-border-b"] = "border-bottom-width: 1px;";
classMap["kata-border-l"] = "border-left-width: 1px;";
classMap["kata-border-solid"] = "border-style: solid;";
classMap["kata-border-dashed"] = "border-style: dashed;";
classMap["kata-border-dotted"] = "border-style: dotted;";
classMap["kata-border-double"] = "border-style: double;";
classMap["kata-border-none"] = "border-style: none;";
//#endregion


//#region border-radius

classMap["kata-rounded-none"] = "border-radius: 0;";
classMap["kata-rounded-sm"] = "border-radius: 0.125rem;";
classMap["kata-rounded"] = "border-radius: 0.25rem;";
classMap["kata-rounded-md"] = "border-radius: 0.375rem;";
classMap["kata-rounded-lg"] = "border-radius: 0.5rem;";
classMap["kata-rounded-xl"] = "border-radius: 0.75rem;";
classMap["kata-rounded-2xl"] = "border-radius: 1rem;";
classMap["kata-rounded-3xl"] = "border-radius: 1.5rem;";
classMap["kata-rounded-full"] = "border-radius: 9999px;";
for (const [k, v] of Object.entries(scale)) {
  classMap[`kata-rounded-${k}`] = `border-radius: ${v};`;
}

//#endregion


//#region cursor
classMap["kata-cursor-auto"] = "cursor: auto;";
classMap["kata-cursor-default"] = "cursor: default;";
classMap["kata-cursor-pointer"] = "cursor: pointer;";
classMap["kata-cursor-wait"] = "cursor: wait;";
classMap["kata-cursor-text"] = "cursor: text;";
classMap["kata-cursor-move"] = "cursor: move;";
classMap["kata-cursor-not-allowed"] = "cursor: not-allowed;";
classMap["kata-cursor-grab"] = "cursor: grab;";
//#endregion


//#region visibility
classMap["kata-visible"] = "visibility: visible;";
classMap["kata-invisible"] = "visibility: hidden;";
//#endregion




//#region chai-exclusive

const chaiColors = {
  
  "kata-chai-masala": "#8B4A2E", // classic spiced milk tea — deep reddish-brown
  "kata-chai-karak": "#C27B3E", // Gulf-style strong chai — amber-caramel
  "kata-chai-kashmiri": "#D4697A", // pink salt tea — dusty rose
  "kata-chai-noon": "#B85C6E", // bolder Kashmiri noon chai — deeper rose
  "kata-chai-ginger": "#A0522D", // ginger-forward brew — warm sienna
  "kata-chai-cardamom": "#BFA07A", // aromatic cardamom chai — pale tan
  "kata-chai-elaichi": "#E8C99A", // heavy milk chai — creamy beige
  "kata-chai-black": "#3B2314", // unsweetened black tea — dark espresso
  "kata-chai-saffron": "#E8A020", // saffron-infused chai — vivid golden orange
  "kata-chai-tulsi": "#5C8A5A", // holy basil tea — forest green
  "kata-chai-foam": "#F2E8DC", // noon chai foam topping — warm off-white

  // ── Japanese greens ──
  "kata-chai-matcha": "#4A7C59", // classic matcha — vivid forest green
  "kata-chai-matcha-latte": "#7DAB7A", // matcha with milk — softer sage
  "kata-chai-matcha-ceremonial": "#2D5E3A", // high-grade ceremonial — deep rich green
  "kata-chai-sencha": "#6B8F47", // sencha — lighter yellow-green
  "kata-chai-hojicha": "#8B6347", // roasted green tea — warm chestnut
  "kata-chai-genmaicha": "#A8935A", // green tea + roasted rice — toasty gold
  "kata-chai-gyokuro": "#3D6B40", // shade-grown — deep mossy green

  // ── Oolong ──
  "kata-chai-oolong-light": "#C9B87A", // lightly oxidised — pale amber gold
  "kata-chai-oolong-dark": "#8B5E3C", // heavily oxidised — warm brown
  "kata-chai-dahongpao": "#7A3E28", // da hong pao Wuyi rock — deep reddish-brown
  "kata-chai-dongding": "#B8895A", // dong ding Taiwan — medium amber
  "kata-chai-milk-oolong": "#D4C49A", // jin xuan milk oolong — creamy buff

  // ── Chinese teas ──
  "kata-chai-longjing": "#8CAF6A", // dragon well — fresh yellow-green
  "kata-chai-tieguanyin": "#C4A96B", // iron goddess — golden amber
  "kata-chai-puerh": "#6B3A2A", // aged pu-erh — dark earthy brown
  "kata-chai-baimudan": "#E8D5B0", // white peony — pale warm straw
  "kata-chai-yinzhen": "#F0E6C8", // silver needle — very pale cream
  "kata-chai-chrysanthemum": "#F5D78E", // chrysanthemum flower — pale yellow

  // ── South Asian blacks ──
  "kata-chai-assam": "#7B3F1E", // assam CTC — deep malty brown
  "kata-chai-darjeeling": "#C4875A", // darjeeling first flush — copper-amber
  "kata-chai-nilgiri": "#9B5C38", // nilgiri — medium warm brown
  "kata-chai-ceylon": "#A0522D", // ceylon black — classic sienna

  // ── African teas ──
  "kata-chai-kenya": "#8B3A2A", // kenyan black — bold deep red-brown
  "kata-chai-rooibos": "#C1440E", // rooibos — vivid burnt orange-red
  "kata-chai-rooibos-latte": "#D4845A", // rooibos with milk — softened terracotta

  // ── Western & British ──
  "kata-chai-earl-grey": "#6B5B8A", // earl grey (bergamot) — lavender-purple
  "kata-chai-english-breakfast": "#7A3B28", // english breakfast — rich dark brown

  // ── Herbal & floral ──
  "kata-chai-chamomile": "#F0C96A", // chamomile — warm golden yellow
  "kata-chai-peppermint": "#4A8F6A", // peppermint — cool mid-green
  "kata-chai-hibiscus": "#C4204A", // hibiscus — vivid magenta-red
  "kata-chai-lavender": "#9B7EC8", // lavender — soft purple
  "kata-chai-lemon-verbena": "#D4C84A", // lemon verbena — acid yellow-green
  "kata-chai-rosehip": "#E8603A", // rose hip — bright orange-red

  // ── Middle Eastern & Central Asian ──
  "kata-chai-moroccan-mint": "#3A8A5A", // moroccan mint green tea — vivid green
  "kata-chai-gunpowder": "#6B7A3A", // gunpowder green — muted olive
  "kata-chai-irani": "#C27040", // irani chai — amber-orange
  "kata-chai-samovar": "#8B3D28", // samovar-brewed — deep red-brown
  "kata-chai-saffron-persian": "#D4A020", // persian saffron tea — golden amber

  // ── South American ──
  "kata-chai-yerba-mate": "#5A7A3A", // yerba mate — medium grassy green
  "kata-chai-mate-amargo": "#3A5A28", // bitter mate — deep forest green
  "kata-chai-muna": "#7A9A5A", // muña muña Peru — light herbal green
  "kata-chai-cascara": "#9B4A3A", // cascara coffee cherry tea — rusty red-brown
};

for (const [k, v] of Object.entries(chaiColors)) {
  classMap[`kata-text-${k}`] = `color: ${v};`;
  classMap[`kata-bg-${k}`] = `background-color: ${v};`;
  classMap[`kata-border-${k}`] = `border-color: ${v};`;
}
//#endregion

