# Nexus Now!

Inspired by [Sci-Hub Now!](https://github.com/gchenfc/sci-hub-now)

## Installation

You can manually install the extension using the installers attached in
the [latest release](https://github.com/aokellermann/nexus-now/releases). The `.xpi` installer should work for
gecko-based browsers (firefox), and the `.crx` installer should work for Chromium-based browsers (basically everything
else).

### Chrome

1. Go to the [latest release](https://github.com/aokellermann/nexus-now/releases) and download the `.crx` file.
2. Go to the webpage [chrome://extensions/](chrome://extensions/) and make sure the toggle `Developer mode` is on in the
   top right corner of the page. This will allow you to install extensions unaffiliated with the Chrome Web Store.
3. Drag the downloaded `.crx` file anywhere onto the page to install the extension.

### Edge

1. Go to the [latest release](https://github.com/aokellermann/nexus-now/releases) and download the `.crx` file.
2. Go to the webpage [edge://extensions/](edge://extensions/) and make sure the toggle `Developer mode` is on in the
   left side of the page. This will allow you to install extensions unaffiliated with the Microsoft Store.
3. Drag the downloaded `.crx` file anywhere onto the page to install the extension.

### Firefox

1. Go to the [latest release](https://github.com/aokellermann/nexus-now/releases) and download the `.xpi` file.
2. It will ask you if you want to install the addon. Click yes.

## Compatibility

This extension uses Manifest V3, which is supported in:

- Firefox >= 109
- Chromium >= 88

## Manual Installation

Each update to this extension must go through a review process by the entities that host the extension. Mozilla is
usually very fast (~30 minutes), Chrome is slower (~1 day), and Edge is really slow (~1 week).

You can manually install the extension using the installers attached in
the [latest release](https://github.com/aokellermann/nexus-now/releases). The `.xpi` installer should work for
gecko-based browsers (firefox), and the `.crx` installer should work for Chromium-based browsers (basically everything
else).

### Chromium

1. Go to [chrome://extensions](chrome://extensions).
2. Click on the `details` button for Nexus Now.
3. Scroll down anc click on `Extension options`
4. You can check or uncheck auto download.

### Firefox

1. Go to [about:addons](about:addons).
2. Click on Nexus Now.
3. Click on the `Preferences` tab.
4. You can check or uncheck auto download.


## Auto download

Nexus Now supports automatic PDF download, which is off by default. When the extension is installed, it will bring
you to the extension options page where you can opt in to auto download.

## Building

You can build the extension yourself:

First, install dependencies:

```bash
npm install -g web-ext
````

Then build:

```bash
./build.sh
```
