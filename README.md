# Warframe GID Grabber

A minimal WebExtension (Manifest V3) that reads the `gid` cookie for `https://www.warframe.com/` and shows it in the toolbar popup, with a Copy button.

## Files

- `manifest.json` – extension manifest (requests `cookies` permission and access to `https://www.warframe.com/*`)
- `popup.html` / `popup.js` – popup UI that fetches and displays the cookie

## Install (Chrome / Chromium / Edge / Brave)

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder.

## Install (Firefox)

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and select `manifest.json`.

## Usage

1. Log in at https://www.warframe.com/ in the same browser profile.
2. Click the extension's toolbar icon.
3. The `gid` value appears; click **Copy** to put it on your clipboard. Use **Refresh** to re-read it.

Note: the `gid` cookie is read via the browser's cookie API, so HTTP-only cookies are accessible too. Treat the value as sensitive — it may be a session identifier.
