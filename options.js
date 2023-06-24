// In-page cache of the user's options
const options = {};
const optionsForm = document.getElementById("optionsForm");

// Immediately persist options changes
optionsForm.autodownload.addEventListener("change", (event) => {
    options.autodownload = event.target.checked;
    browser.storage.sync.set({options});
});

// Initialize the form with the user's option settings

if (typeof browser === "undefined") {
    var browser = chrome;
}
const data = await browser.storage.sync.get("options");
Object.assign(options, data.options);
optionsForm.autodownload.checked = Boolean(options.autodownload);
