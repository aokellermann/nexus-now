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
