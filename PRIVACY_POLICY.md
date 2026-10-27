# Privacy Policy for Warframe Account ID Grabber

**Last updated:** 27 October 2026

Warframe Account ID Grabber ("the Extension") is a browser extension that displays the `gid` cookie that Warframe's website (www.warframe.com) sets for your logged-in browser session, so you can view or copy it. This policy explains what the Extension does with information.

## Summary

- The Extension does not collect, store, transmit, or sell your personal data to the developer or any third party.
- The Extension has no analytics, advertising, tracking, or telemetry.
- The Extension does not save anything persistently. It reads the `gid` cookie only when you open the popup or press Refresh, and it keeps the value in memory only while the popup is open.

## Information the Extension Accesses

When you open the Extension's popup, it reads the `gid` cookie for `https://www.warframe.com/` using the browser's cookies permission. This cookie may include HTTP-only values, which the browser's cookie API can access even though page scripts cannot.

The value is shown in the popup. It leaves the Extension only in these cases:

1. **Copy:** If you click **Copy**, the value is written to your system clipboard.
2. **Open Profile Viewing Data:** If you select a platform and click **Open Profile Viewing Data**, the Extension opens a new browser tab to the Warframe API for that platform (for example, `https://api.warframe.com/cdn/getProfileViewingData.php?playerId=…`). Your browser then sends the value to Warframe's servers as part of that request. This is a normal web request governed by Digital Extremes' own privacy policy, not by this Extension. The Extension does not send the value anywhere else.

## Information the Extension Does Not Collect

The Extension does not:
- Collect or transmit your data to the developer or any server the developer operates.
- Use cookies of its own, or local, sync, or session storage.
- Read or record browsing history or the content of pages you visit.
- Read cookies for any site other than `https://www.warframe.com/`.
- Use third-party analytics, advertising, or crash-reporting services.

## Permissions

- **cookies:** Used only to read the `gid` cookie for `https://www.warframe.com/`.
- **Host access to `https://www.warframe.com/*`:** Used to define the domain whose cookie is read.
- **Tabs (implicit):** Used to open the profile viewing data page in a new tab when you click **Open Profile Viewing Data**.

## Sensitive Information

The `gid` value is an account identifier and may function as a session credential. Anyone who has it could potentially use it to act on or view information about your account. Don't share it publicly or with people you don't trust. The Extension does not protect it beyond your browser's own security.

## Data Retention

The Extension retains no data. The value is held in the popup's memory while it is open and is discarded when the popup closes.

## Children's Privacy

The Extension is not directed to children under 13 and does not knowingly collect information from anyone.

## Changes to This Policy

If the Extension's behavior changes, this policy will be updated and the "Last updated" date revised. Material changes will be noted in the Extension's release notes.

## Contact

For questions about this policy, contact: https://github.com/Sainan/warframe-account-id-grabber/issues

## Disclaimer

Warframe Account ID Grabber is an independent project. It is not affiliated with, endorsed by, or sponsored by Digital Extremes Ltd. "Warframe" is a trademark of Digital Extremes Ltd.
