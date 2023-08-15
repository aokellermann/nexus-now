# Nexus Now!

Inspired by [Sci-Hub Now!](https://github.com/gchenfc/sci-hub-now)

## Usage

When on a website for an article that is identifiable by a [DOI](https://www.doi.org/the-identifier/what-is-a-doi/),
click the Nexus Now extension icon. The [STC](https://standard-template-construct.org) page for that article will be
opened in a new tab. If you enable autodownload, a PDF of the article will attempt to download.

### Autodownload

STC provides a [Hub API](https://standard-template-construct.org/#/help/stc-hub-api), which maps a DOI
to a PDF. Nexus Now uses this API to automatically download PDFs of articles.

The PDF may not be accessible through this API, but may still be accessible through STC, so if Nexus Now cannot find the
PDF within 5 seconds, STC will be opened in a new tab as if autodownload is not enabled.

You can opt in or out of autodownload:

#### Chrome/Edge

1. Right click the extension icon or click the three dots next to the extension icon and select "Options" from the dropdown.
2. Check or uncheck autodownload.

#### Firefox

1. Right click the extension icon or click the gear next to the extension icon and select "Manage extension" from the dropdown.
2. Check or uncheck autodownload.

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
