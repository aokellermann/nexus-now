# Nexus Now!

Inspired by [Sci-Hub Now!](https://github.com/gchenfc/sci-hub-now)

Mozilla add-on: https://addons.mozilla.org/en-US/firefox/addon/nexus-now

Chrome extension: *removed from Chrome Web Store as of 6/13/23*

Edge add-on: https://microsoftedge.microsoft.com/addons/detail/nexus-now/jkjhclabmdjcghibkhpbbjoaijfpipkf

Other browsers: open an issue or PR

## Compatibility

This extension uses Manifest V3, which is supported in:

- Firefox >= 109
- Chromium >= 88

## Installation

Each update to this extension must go through a review process by the entities that host the extension. Mozilla is
usually very fast (~30 minutes), Chrome is slower (~1 day), and Edge is really slow (~1 week).

You can manually install the extension using the installers attached in
the [latest release](https://github.com/aokellermann/nexus-now/releases). The `.xpi` installer should work for
gecko-based browsers (firefox), and the `.crx` installer should work for Chromium-based browsers (basically everything
else).

### Chrome

1. Go to the [latest release](https://github.com/aokellermann/nexus-now/releases) and download the `.crx` file.
2. Go to the webpage [chrome://extensions/](chrome://extensions/) and make sure the toggle `Developer mode` is on in the
   top right corner of the page. This will allow you to install extensions unaffiliated with the Chrome Web Store.
3. Drag the downloaded `.crx` file anywhere onto the page to install the extension.

### Firefox

1. Go to the [latest release](https://github.com/aokellermann/nexus-now/releases) and download the `.xpi` file.
2. It will ask you if you want to install the addon. Click yes.

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
