import { classMap } from "./classMap.js";

function extractClassNames(html) {
    const classRegex = /class="([^"]*)"/g;
    const classNames = {};
    let match;
    while ((match = classRegex.exec(html)) !== null) {
        const classes = match[1].trim().split(/\s+/);
        classes.filter(cls => cls.startsWith("kata-")).forEach(cls => classNames[cls] = true);


}