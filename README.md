# Nexus Now!

Inspired by [Sci-Hub Now!](https://github.com/gchenfc/sci-hub-now)

Mozilla add-on: https://addons.mozilla.org/en-US/firefox/addon/nexus-now

Chrome extension: https://chrome.google.com/webstore/detail/nexus-now/neaelilefgejjfmjigboabajmmeonlfa

Edge add-on: https://microsoftedge.microsoft.com/addons/detail/nexus-now/jkjhclabmdjcghibkhpbbjoaijfpipkf

Other browsers: open an issue or PR

## Compatability

This extension uses Manifest V3, which is supported in:

- Firefox >= 109
- Chromium >= 88

## Manual Installation

Each update to this extension must go through a review process by the entities that host the extension. Mozilla is
usually very fast (~30 minutes), Chrome is slower (~1 day), and Edge is really slow (~1 week).

You can manually install the extension using the installers attached in
the [latest release](https://github.com/aokellermann/nexus-now/releases). The `.xpi` installer should work for
gecko-based browsers (firefox), and the `.crx` installer should work for chromium-based browsers (basically everything
else).

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
