# Warframe Account ID Grabber

A minimal WebExtension (Manifest V3) that reads the `gid` cookie for `https://www.warframe.com/` and shows it in the toolbar popup, with buttons to copy it or open your public profile data.

## Install

The extension is available for one-click install:

- **Chrome / Edge / Brave / Chromium:** [Chrome Web Store](https://chromewebstore.google.com/detail/warframe-account-id-grabb/kjjjjdcjnanbbghoebnjnbjlkmmfaiga)
- **Firefox:** [Firefox Add-ons (AMO)](https://addons.mozilla.org/en-GB/firefox/addon/warframe-account-id-grabber/)

### Manual install from source

#### Chrome / Chromium / Edge / Brave

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder.

#### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and select `manifest.json`.

## Usage

1. Log in at https://www.warframe.com/ in the same browser profile.
2. Click the extension's toolbar icon.
3. The `gid` value appears. Use:
   - **Copy** to put it on your clipboard.
   - **Refresh** to re-read the cookie (for example, after switching accounts).
   - **Fetch data** to open your profile viewing data from Warframe's API in a new tab. Choose your platform (PC, PS4, Xbox One, Switch, Mobile, or Android) from the dropdown first.

## Privacy and security

- The extension only reads the `gid` cookie and displays it. It does not send the value to any server other than Warframe's own API, and only when you click **Fetch data**.
- The `gid` cookie is read via the browser's cookie API, so HTTP-only cookies are accessible too. Treat the value as sensitive, since it may be a session identifier. Don't share it publicly.
- **Fetch data** places the `gid` value in the URL of the page it opens, so it may be saved in browser history.
- See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.
