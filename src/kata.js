function extractClassNames (html){
    const classRegex = /class="([^"]*)"/g;
    const classNames = {};
    let match;
    while ((match = classRegex.exec(html)) !== null) {
        const classes = match[1].trim().split(/\s+/);
        classes.filter


}