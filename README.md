

<h1 align="center">KataCSS</h1>

<p align="center">
  A utility-first inline CSS engine. Write <code>kata-*</code> classes, get inline styles.<br/>
  No build step, no config, no compiler.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/kata-css"><img src="https://img.shields.io/npm/v/kata-css" alt="npm version"/></a>
  <a href="https://www.npmjs.com/package/kata-css"><img src="https://img.shields.io/npm/dw/kata-css" alt="npm downloads"/></a>
</p>

---

## What is KataCSS?

KataCSS reads `kata-*` class names on your HTML elements and converts them into inline CSS styles the moment the page loads. That's the whole thing.

No PostCSS. No JIT compiler. No purge configuration to think about. Drop a script tag in, write some classes, open the browser, and it works.

The spacing scale is `i × 0.25rem` so `kata-p-4` gives you `1rem`, same as Tailwind. If you've used Tailwind before, the muscle memory transfers instantly.

---
## Deployment

The docs are live at [KataCSS](https://kata.saumyagrawal.in)
The demo is live [here](https://kata.saumyagrawal.in/demo.html)
---
## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/kata-css@latest/dist/kata.min.js"></script>
```

Paste this into your HTML and start styling immediately.

### npm

```bash
npm install kata-css
```

```js
import "kata-css";
```

That single import is all you need. It self-executes, no initialization function to call, no setup object to configure.

---

## How it Works

KataCSS listens for `DOMContentLoaded`. Once the DOM is ready, it scans every element with a class attribute, finds anything starting with `kata-`, looks it up in a flat key-value map, writes the result as an inline `style`, and removes the original class.

```
Browser parses HTML
  → script registers DOMContentLoaded listener
  → DOM finishes loading
  → KataCSS scans all elements
  → finds kata-* classes
  → looks kata- classes in classMap
  → writes inline style attribute
  → removes kata-* classes from classList
```

Nothing left behind. No `kata-*` classes in the final DOM — just clean inline styles. If you write a class that doesn't exist in the map, KataCSS tells you:

```
[kata-css] Unknown class: "kata-[style]"
```

---

## Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/kata-css@latest/dist/kata.min.js"></script>
</head>
<body>

  <h1 class="kata-text-3xl kata-font-bold kata-text-blue-500">
    Hello, KataCSS
  </h1>

  <div class="kata-flex kata-gap-4 kata-p-6 kata-bg-kata-chai-matcha kata-rounded-lg">
    <p class="kata-text-white kata-font-medium">Styles applied on load</p>
  </div>

</body>
</html>
```

---

## Spacing Scale

All spacing utilities multiply by `0.25rem`. The scale runs 0 to 96. No decimals in class names, need `0.75rem`? Use `kata-p-3`.

| Class | Value |
|---|---|
| `kata-p-1` | `0.25rem` (4px) |
| `kata-p-2` | `0.5rem` (8px) |
| `kata-p-4` | `1rem` (16px) |
| `kata-p-8` | `2rem` (32px) |
| `kata-p-16` | `4rem` (64px) |

### Padding

| Class | Property |
|---|---|
| `kata-p-{n}` | `padding: n×0.25rem` |
| `kata-px-{n}` | `padding-left + padding-right` |
| `kata-py-{n}` | `padding-top + padding-bottom` |
| `kata-pt-{n}` | `padding-top` |
| `kata-pb-{n}` | `padding-bottom` |
| `kata-pl-{n}` | `padding-left` |
| `kata-pr-{n}` | `padding-right` |

### Margin

| Class | Property |
|---|---|
| `kata-m-{n}` | `margin: n×0.25rem` |
| `kata-mx-{n}` | `margin-left + margin-right` |
| `kata-my-{n}` | `margin-top + margin-bottom` |
| `kata-mt-{n}` | `margin-top` |
| `kata-mb-{n}` | `margin-bottom` |
| `kata-ml-{n}` | `margin-left` |
| `kata-mr-{n}` | `margin-right` |
| `kata-m-auto` | `margin: auto` |
| `kata-mx-auto` | `margin-left: auto; margin-right: auto` |
| `kata-my-auto` | `margin-top: auto; margin-bottom: auto` |
| `kata-mt-auto` | `margin-top: auto` |
| `kata-mb-auto` | `margin-bottom: auto` |
| `kata-ml-auto` | `margin-left: auto` |
| `kata-mr-auto` | `margin-right: auto` |

### Gap

| Class | Property |
|---|---|
| `kata-gap-{n}` | `gap: n×0.25rem` |
| `kata-gap-x-{n}` | `column-gap: n×0.25rem` |
| `kata-gap-y-{n}` | `row-gap: n×0.25rem` |

---

## Sizing

### Width

| Class | Value |
|---|---|
| `kata-w-{0–96}` | `width: n×0.25rem` |
| `kata-w-auto` | `width: auto` |
| `kata-w-full` | `width: 100%` |
| `kata-w-half` | `width: 50%` |
| `kata-w-screen` | `width: 100vw` |
| `kata-w-min` | `width: min-content` |
| `kata-w-max` | `width: max-content` |
| `kata-w-fit` | `width: fit-content` |

### Height

| Class | Value |
|---|---|
| `kata-h-{0–96}` | `height: n×0.25rem` |
| `kata-h-auto` | `height: auto` |
| `kata-h-full` | `height: 100%` |
| `kata-h-half` | `height: 50%` |
| `kata-h-screen` | `height: 100vh` |
| `kata-h-min` | `height: min-content` |
| `kata-h-max` | `height: max-content` |
| `kata-h-fit` | `height: fit-content` |

---

## Box Sizing

| Class | Value |
|---|---|
| `kata-box-border` | `box-sizing: border-box` |
| `kata-box-content` | `box-sizing: content-box` |

---

## Display

| Class | Value |
|---|---|
| `kata-block` | `display: block` |
| `kata-inline` | `display: inline` |
| `kata-inline-block` | `display: inline-block` |
| `kata-flex` | `display: flex` |
| `kata-inline-flex` | `display: inline-flex` |
| `kata-grid` | `display: grid` |
| `kata-inline-grid` | `display: inline-grid` |
| `kata-hidden` | `display: none` |
| `kata-contents` | `display: contents` |

---

## Flexbox

### Direction

| Class | Value |
|---|---|
| `kata-flex-row` | `flex-direction: row` |
| `kata-flex-row-reverse` | `flex-direction: row-reverse` |
| `kata-flex-col` | `flex-direction: column` |
| `kata-flex-col-reverse` | `flex-direction: column-reverse` |

### Wrap

| Class | Value |
|---|---|
| `kata-flex-wrap` | `flex-wrap: wrap` |
| `kata-flex-wrap-reverse` | `flex-wrap: wrap-reverse` |
| `kata-flex-nowrap` | `flex-wrap: nowrap` |

### Justify Content

| Class | Value |
|---|---|
| `kata-justify-start` | `justify-content: flex-start` |
| `kata-justify-end` | `justify-content: flex-end` |
| `kata-justify-center` | `justify-content: center` |
| `kata-justify-between` | `justify-content: space-between` |
| `kata-justify-around` | `justify-content: space-around` |
| `kata-justify-evenly` | `justify-content: space-evenly` |

### Align Items

| Class | Value |
|---|---|
| `kata-items-start` | `align-items: flex-start` |
| `kata-items-end` | `align-items: flex-end` |
| `kata-items-center` | `align-items: center` |
| `kata-items-baseline` | `align-items: baseline` |
| `kata-items-stretch` | `align-items: stretch` |

---

## Position

| Class | Value |
|---|---|
| `kata-static` | `position: static` |
| `kata-relative` | `position: relative` |
| `kata-absolute` | `position: absolute` |
| `kata-fixed` | `position: fixed` |
| `kata-sticky` | `position: sticky` |
| `kata-inset-0` | `top: 0; right: 0; bottom: 0; left: 0` |
| `kata-inset-auto` | `top: auto; right: auto; bottom: auto; left: auto` |
| `kata-top-{0–96}` | `top: n×0.25rem` |
| `kata-right-{0–96}` | `right: n×0.25rem` |
| `kata-bottom-{0–96}` | `bottom: n×0.25rem` |
| `kata-left-{0–96}` | `left: n×0.25rem` |
| `kata-top-auto` | `top: auto` |
| `kata-right-auto` | `right: auto` |
| `kata-bottom-auto` | `bottom: auto` |
| `kata-left-auto` | `left: auto` |

---

## Z-Index

| Class | Value |
|---|---|
| `kata-z-{0–96}` | `z-index: n` |
| `kata-z-auto` | `z-index: auto` |

---

## Typography

### Font Family

| Class | Stack |
|---|---|
| `kata-font-sans` | `ui-sans-serif, system-ui, -apple-system, sans-serif` |
| `kata-font-serif` | `ui-serif, Georgia, Cambria, serif` |
| `kata-font-mono` | `ui-monospace, Cascadia Code, Courier New, monospace` |

### Font Size

Each size also sets a default line-height.

| Class | Font Size | Line Height |
|---|---|---|
| `kata-text-xs` | `0.75rem` | `1rem` |
| `kata-text-sm` | `0.875rem` | `1.25rem` |
| `kata-text-base` | `1rem` | `1.5rem` |
| `kata-text-lg` | `1.125rem` | `1.75rem` |
| `kata-text-xl` | `1.25rem` | `1.75rem` |
| `kata-text-2xl` | `1.5rem` | `2rem` |
| `kata-text-3xl` | `1.875rem` | `2.25rem` |
| `kata-text-4xl` | `2.25rem` | `2.5rem` |
| `kata-text-5xl` | `3rem` | `1` |
| `kata-text-6xl` | `3.75rem` | `1` |

### Font Weight

| Class | Value |
|---|---|
| `kata-font-thin` | `font-weight: 100` |
| `kata-font-extralight` | `font-weight: 200` |
| `kata-font-light` | `font-weight: 300` |
| `kata-font-normal` | `font-weight: 400` |
| `kata-font-medium` | `font-weight: 500` |
| `kata-font-semibold` | `font-weight: 600` |
| `kata-font-bold` | `font-weight: 700` |
| `kata-font-extrabold` | `font-weight: 800` |
| `kata-font-black` | `font-weight: 900` |

### Font Style

| Class | Value |
|---|---|
| `kata-italic` | `font-style: italic` |
| `kata-not-italic` | `font-style: normal` |

### Text Align

| Class | Value |
|---|---|
| `kata-text-left` | `text-align: left` |
| `kata-text-center` | `text-align: center` |
| `kata-text-right` | `text-align: right` |
| `kata-text-justify` | `text-align: justify` |
| `kata-text-start` | `text-align: start` |
| `kata-text-end` | `text-align: end` |

### Line Height

| Class | Value |
|---|---|
| `kata-leading-none` | `line-height: 1` |
| `kata-leading-tight` | `line-height: 1.25` |
| `kata-leading-snug` | `line-height: 1.375` |
| `kata-leading-normal` | `line-height: 1.5` |
| `kata-leading-relaxed` | `line-height: 1.625` |
| `kata-leading-loose` | `line-height: 2` |

### Letter Spacing

| Class | Value |
|---|---|
| `kata-tracking-tighter` | `letter-spacing: -0.05em` |
| `kata-tracking-tight` | `letter-spacing: -0.025em` |
| `kata-tracking-normal` | `letter-spacing: 0em` |
| `kata-tracking-wide` | `letter-spacing: 0.025em` |
| `kata-tracking-wider` | `letter-spacing: 0.05em` |
| `kata-tracking-widest` | `letter-spacing: 0.1em` |

---

## Text Decoration

| Class | Value |
|---|---|
| `kata-underline` | `text-decoration-line: underline` |
| `kata-overline` | `text-decoration-line: overline` |
| `kata-line-through` | `text-decoration-line: line-through` |
| `kata-no-underline` | `text-decoration: none` |
| `kata-decoration-solid` | `text-decoration-style: solid` |
| `kata-decoration-dashed` | `text-decoration-style: dashed` |
| `kata-decoration-dotted` | `text-decoration-style: dotted` |
| `kata-decoration-double` | `text-decoration-style: double` |
| `kata-decoration-wavy` | `text-decoration-style: wavy` |

---

## Colors

Every color key works with three prefixes:

```
kata-text-{key}     → color
kata-bg-{key}       → background-color
kata-border-{key}   → border-color
```

### Standard Palette

```
black, white, transparent

gray:   50 100 200 300 400 500 600 700 800 900
red:    100 300 500 700 900
orange: 100 300 500 700
yellow: 100 300 500 700
green:  100 300 500 700 900
teal:   100 300 500 700
blue:   100 300 500 700 900
indigo: 100 300 500 700
purple: 100 300 500 700
pink:   100 300 500 700
```

---

## Background Helpers

| Class | Value |
|---|---|
| `kata-bg-none` | `background: none` |
| `kata-bg-cover` | `background-size: cover` |
| `kata-bg-contain` | `background-size: contain` |
| `kata-bg-center` | `background-position: center` |
| `kata-bg-top` | `background-position: top` |
| `kata-bg-bottom` | `background-position: bottom` |
| `kata-bg-no-repeat` | `background-repeat: no-repeat` |
| `kata-bg-repeat` | `background-repeat: repeat` |

---

## Borders

### Width

| Class | Value |
|---|---|
| `kata-border-0` | `border-width: 0` |
| `kata-border` | `border-width: 1px` |
| `kata-border-2` | `border-width: 2px` |
| `kata-border-4` | `border-width: 4px` |
| `kata-border-8` | `border-width: 8px` |
| `kata-border-t` | `border-top-width: 1px` |
| `kata-border-r` | `border-right-width: 1px` |
| `kata-border-b` | `border-bottom-width: 1px` |
| `kata-border-l` | `border-left-width: 1px` |

### Style

| Class | Value |
|---|---|
| `kata-border-solid` | `border-style: solid` |
| `kata-border-dashed` | `border-style: dashed` |
| `kata-border-dotted` | `border-style: dotted` |
| `kata-border-double` | `border-style: double` |
| `kata-border-none` | `border-style: none` |

### Radius

| Class | Value |
|---|---|
| `kata-rounded-none` | `border-radius: 0` |
| `kata-rounded-sm` | `border-radius: 0.125rem` |
| `kata-rounded` | `border-radius: 0.25rem` |
| `kata-rounded-md` | `border-radius: 0.375rem` |
| `kata-rounded-lg` | `border-radius: 0.5rem` |
| `kata-rounded-xl` | `border-radius: 0.75rem` |
| `kata-rounded-2xl` | `border-radius: 1rem` |
| `kata-rounded-3xl` | `border-radius: 1.5rem` |
| `kata-rounded-full` | `border-radius: 9999px` |
| `kata-rounded-{n}` | `border-radius: n×0.25rem` |

---

## Cursor

| Class | Value |
|---|---|
| `kata-cursor-auto` | `cursor: auto` |
| `kata-cursor-default` | `cursor: default` |
| `kata-cursor-pointer` | `cursor: pointer` |
| `kata-cursor-wait` | `cursor: wait` |
| `kata-cursor-text` | `cursor: text` |
| `kata-cursor-move` | `cursor: move` |
| `kata-cursor-not-allowed` | `cursor: not-allowed` |
| `kata-cursor-grab` | `cursor: grab` |

---

## Visibility

| Class | Value |
|---|---|
| `kata-visible` | `visibility: visible` |
| `kata-invisible` | `visibility: hidden` |

---

## Chai Color Scheme

Colors named after real chai and tea varieties. Built for the ChaiCode cohort. All chai colors follow the same three-prefix pattern:

```
kata-bg-kata-chai-masala
kata-text-kata-chai-earl-grey
kata-border-kata-chai-matcha
```

| Key | Hex | Tea |
|---|---|---|
| `kata-chai-masala` | `#8B4A2E` | Classic spiced milk tea |
| `kata-chai-karak` | `#C27B3E` | Gulf-style strong chai |
| `kata-chai-kashmiri` | `#D4697A` | Pink salt tea |
| `kata-chai-noon` | `#B85C6E` | Noon chai |
| `kata-chai-ginger` | `#A0522D` | Ginger chai |
| `kata-chai-cardamom` | `#BFA07A` | Cardamom chai |
| `kata-chai-elaichi` | `#E8C99A` | Heavy milk chai |
| `kata-chai-black` | `#3B2314` | Unsweetened black tea |
| `kata-chai-saffron` | `#E8A020` | Saffron chai |
| `kata-chai-tulsi` | `#5C8A5A` | Holy basil tea |
| `kata-chai-foam` | `#F2E8DC` | Noon chai foam |
| `kata-chai-matcha` | `#4A7C59` | Matcha |
| `kata-chai-matcha-latte` | `#7DAB7A` | Matcha latte |
| `kata-chai-matcha-ceremonial` | `#2D5E3A` | Ceremonial matcha |
| `kata-chai-sencha` | `#6B8F47` | Sencha |
| `kata-chai-hojicha` | `#8B6347` | Hojicha |
| `kata-chai-genmaicha` | `#A8935A` | Genmaicha |
| `kata-chai-gyokuro` | `#3D6B40` | Gyokuro |
| `kata-chai-oolong-light` | `#C9B87A` | Light oolong |
| `kata-chai-oolong-dark` | `#8B5E3C` | Dark oolong |
| `kata-chai-dahongpao` | `#7A3E28` | Da Hong Pao |
| `kata-chai-dongding` | `#B8895A` | Dong Ding |
| `kata-chai-milk-oolong` | `#D4C49A` | Milk oolong |
| `kata-chai-longjing` | `#8CAF6A` | Longjing |
| `kata-chai-tieguanyin` | `#C4A96B` | Tie Guan Yin |
| `kata-chai-puerh` | `#6B3A2A` | Pu-erh |
| `kata-chai-baimudan` | `#E8D5B0` | White Peony |
| `kata-chai-yinzhen` | `#F0E6C8` | Silver Needle |
| `kata-chai-chrysanthemum` | `#F5D78E` | Chrysanthemum |
| `kata-chai-assam` | `#7B3F1E` | Assam |
| `kata-chai-darjeeling` | `#C4875A` | Darjeeling |
| `kata-chai-nilgiri` | `#9B5C38` | Nilgiri |
| `kata-chai-ceylon` | `#A0522D` | Ceylon black |
| `kata-chai-kenya` | `#8B3A2A` | Kenyan black |
| `kata-chai-rooibos` | `#C1440E` | Rooibos |
| `kata-chai-rooibos-latte` | `#D4845A` | Rooibos latte |
| `kata-chai-earl-grey` | `#6B5B8A` | Earl Grey |
| `kata-chai-english-breakfast` | `#7A3B28` | English Breakfast |
| `kata-chai-chamomile` | `#F0C96A` | Chamomile |
| `kata-chai-peppermint` | `#4A8F6A` | Peppermint |
| `kata-chai-hibiscus` | `#C4204A` | Hibiscus |
| `kata-chai-lavender` | `#9B7EC8` | Lavender |
| `kata-chai-lemon-verbena` | `#D4C84A` | Lemon verbena |
| `kata-chai-rosehip` | `#E8603A` | Rose hip |
| `kata-chai-moroccan-mint` | `#3A8A5A` | Moroccan mint |
| `kata-chai-gunpowder` | `#6B7A3A` | Gunpowder green |
| `kata-chai-irani` | `#C27040` | Irani chai |
| `kata-chai-samovar` | `#8B3D28` | Samovar chai |
| `kata-chai-saffron-persian` | `#D4A020` | Persian saffron tea |
| `kata-chai-yerba-mate` | `#5A7A3A` | Yerba mate |
| `kata-chai-mate-amargo` | `#3A5A28` | Mate amargo |
| `kata-chai-muna` | `#7A9A5A` | Muña muña |
| `kata-chai-cascara` | `#9B4A3A` | Cascara |

---

## Project Structure

```
kata-css/
├── dist/
│   ├── kata.js           UMD build (CDN)
│   └── kata.min.js       minified UMD build
├── docs/
│   ├── docs.html         documentation page
│   └── index.html        landing page
├── src/
│   ├── classMap.js       class: CSS string definitions
│   └── index.js          engine + DOMContentLoaded listener
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## License

MIT. Built for [ChaiCode](https://chaicode.com).
