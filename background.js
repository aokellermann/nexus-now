const doiRegex = /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'<>])\S)+)\b/;
const stcUrl = "https://standard--template--construct-org.ipns.dweb.link/#/nexus_science/doi:";
const carUrl = "https://bafyb4iee27p2wdqsorvj7gquitwuti3sfeepdvx2p3feao2dqri37fm3yy.ipfs.dweb.link";
const trueRed = "#BC243C";

async function onInstalled(details) {
    // add nexus option to context menu (right click)
    await browser.contextMenus.create({
        id: "nexus-doi-selection",
        title: "Find article on Nexus!",
        contexts: ["selection", "link"],
    });

    if (details.reason === "install") {
        await browser.runtime.openOptionsPage();
    }
}

async function handleDoi(doi) {
    const optionsData = await browser.storage.sync.get("options");
    const autodownload = optionsData?.options?.autodownload;

    if (autodownload) {
        const url = `${carUrl}/${encodeURIComponent(encodeURIComponent(doi))}.pdf`;
        console.log(`Attempting to download pdf from ${url}`)
        const downloadId = await browser.downloads.download({
            url: url,
            filename: `${doi}.pdf`
        });
        console.log(`Started download`);

        const timeout = 1000;
        await new Promise(r => setTimeout(r, timeout));

        const downloads = await browser.downloads.search({id: downloadId});
        const download = downloads[0];
        const bytesReceived = download.bytesReceived;
        console.log(`Received ${bytesReceived} after ${timeout} ms`);

        if (bytesReceived) return;
    }

    const url = stcUrl + doi;
    console.log(`Opening STC in new tab: ${url}`)
    await openTab(url);
}

async function openTab(url) {
    await browser.tabs.create({
        url: url
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

    await handleDoi(doi);
}

async function onMessage(request, sender, sendResponse) {
    console.log(request);
    if (request.openTab) {
        await handleDoi(request.openTab);
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

browser.runtime.onInstalled.addListener(onInstalled);

// when nexus option in context menu is clicked
browser.contextMenus.onClicked.addListener(onNexusContextClick);

// when extension toolbar icon is clicked
browser.action.onClicked.addListener(onExtensionClick);

browser.runtime.onMessage.addListener(onMessage);

browser.tabs.onUpdated.addListener(resetBadgeText);
