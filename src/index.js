import { classMap } from "./classMap.js";
function applyKataStyles() {
  const elements = document.querySelectorAll("[class*=kata-]");
  elements.forEach((el) => {
    const kataClasses = Array.from(el.classList).filter((c) => c.startsWith("kata-"));   
    if (!kataClasses.length) return;
    let inlineStyles = el.getAttribute("style") || "";
    kataClasses.forEach((cls) => {
      if (classMap[cls]) {
        inlineStyles += " " + classMap[cls];
        el.classList.remove(cls);
      } else {
        console.warn(`[kata-css] Unknown class: "${cls}"`);
      }
    });
    el.setAttribute("style", inlineStyles.trim());
  });
}
document.addEventListener("DOMContentLoaded", applyKataStyles);
export { applyKataStyles };