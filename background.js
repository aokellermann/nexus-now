// Old and less strict DOI regex.
// const doiRegex = "10.\\d{4,9}/[-._;()/:a-z0-9A-Z]+";
const doiRegex = /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/;
const nexusUrl = "https://standard--template--construct-org.ipns.dweb.link/#/nexus_science/doi:";
const trueRed = "#BC243C";

async function openTab(doi) {
    await browser.tabs.create({
        url: nexusUrl + doi,
    });
}

async function onNexusContextClick(info, tab) {
    // if right-clicked on link, then parse link address first
    let doi = info.linkUrl;
    doi = doi ? doi.match(doiRegex)[0].split(";")[0] : doi;
    // if link not valid, try the highlighted text
    if (!doi) {
        doi = info.selectionText;
    }

    await openTab(doi);
}

async function onMessage(request, sender, sendResponse) {
    console.log(request);
    if (request.openTab) {
        await openTab(request.openTab);
    } else if (request.fail) {
        await browser.action.setBadgeTextColor({color: "white"});
        await browser.action.setBadgeBackgroundColor({color: trueRed});
        await browser.action.setBadgeText({text: ":'("});
    }
}

async function onExtensionClick(tab) {
    await browser.scripting.executeScript({
        target: {tabId: tab.id},
        func: async () => {
            if (typeof browser === "undefined") {
                browser = chrome;
            }

            const re = /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/;
            let foundRegex = location.href.match(re);
            if (!foundRegex) foundRegex = document.body.innerHTML.match(re);
            if (foundRegex) {
                let doi = foundRegex[0].split(";")[0];
                doi = doi.replace(/\.pdf/, "");
                await browser.runtime.sendMessage({openTab: doi});
            } else {
                await browser.runtime.sendMessage({fail: true});
            }
        }
    });
}

async function resetBadgeText() {
    await browser.action.setBadgeText({text: ""});
}


if (typeof browser === "undefined") {
    browser = chrome;
}

// add nexus option to context menu (right click)
browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "nexus-doi-selection",
        title: "Find article on Nexus!",
        contexts: ["selection", "link"],
    });
});

// when nexus option in context menu is clicked
browser.contextMenus.onClicked.addListener(onNexusContextClick);

// when extension toolbar icon is clicked
browser.action.onClicked.addListener(onExtensionClick);

browser.runtime.onMessage.addListener(onMessage);

browser.tabs.onUpdated.addListener(resetBadgeText);
