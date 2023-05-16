if (typeof browser === "undefined") {
    browser = chrome;
}

const foundRegex = document.body.innerHTML.match(/\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/);
if (foundRegex) {
    let doi = foundRegex[0].split(";")[0];
    doi = doi.replace(/\.pdf/, "");
    browser.runtime.sendMessage({openTab: doi});
} else {
    browser.runtime.sendMessage({fail: true});
}