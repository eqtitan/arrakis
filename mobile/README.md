# Sigilbound mobile apps

Native Android and iOS apps for the web game in `../public/game`, built with
[Capacitor](https://capacitorjs.com). The apps run the same game (3D battles included)
from files bundled inside the app, so it plays offline. Friends and chat reach the
website's server.

## Get the Android app (no computer needed)

Every push builds an APK on GitHub (workflow **Sigilbound Mobile**). The newest one is
attached to the **android-latest** release in this repository's *Releases* section.

1. On your Android phone, open the release page and tap **Sigilbound.apk**.
2. Open the download. If asked, allow installs from your browser.
3. To update, install the next build over the old one. Your progress stays.

This is a debug-signed test build, fine for you and your brother. Publishing on Google
Play needs a release signing key and a Play Console account ($25 once).

## iPhone

The workflow compiles the iOS app on GitHub's Macs to check that it builds. Getting it
onto iPhones needs an **Apple Developer account** ($99/year). With one, a signed build can
go to **TestFlight** from GitHub's Macs, still without a computer of your own: add the
signing certificate, provisioning profile and App Store Connect API key as repository
secrets, and the workflow gets an upload step.

## Working on it locally (optional)

```
cd mobile
npm ci
npm run sync          # copies ../public/game into www/ and updates both native projects
npx cap open android  # needs Android Studio
npx cap open ios      # needs a Mac with Xcode
```

App id: `com.sigilbound.game`. Icons and splash screens come from `public/game/icon.svg`.
