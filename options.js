// In-page cache of the user's options
const options = {};
const optionsForm = document.getElementById("optionsForm");

// Immediately persist options changes
optionsForm.autodownload.addEventListener("change", (event) => {
    options.autodownload = event.target.checked;
    chrome.storage.sync.set({options});
});

// Initialize the form with the user's option settings
const data = await chrome.storage.sync.get("options");
Object.assign(options, data.options);
optionsForm.autodownload.checked = Boolean(options.autodownload);
