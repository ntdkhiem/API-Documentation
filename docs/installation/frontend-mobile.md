# Frontend Mobile

## Prerequisites
- NodeJS >= 16.15.0
- NPM >= 8.10.0
- Git CLI

## Install the repo

Clone the [project](https://github.com/massenergize/ME-mobile) from Github to your local machine.
```
git clone https://github.com/massenergize/ME-mobile.git
```
Obtain `.env`, `google-services.json`, and `GoogleServiceInfo.plist` files from Brad or any authorized admin and place it in the root directory of the project.

## Set up Expo account
Create your Expo account here: https://expo.dev/signup

Install EAS CLI:
```
npm install -g eas-cli
```

Log in to your Expo account:
```
eas login
```

## Include secrets in EAS Build
Import secrets from `.env`:
```
eas secret:push --scope project --env-file {location of .env}
```

Import `google-services.json` and `GoogleServiceInfo.plist`:
```
eas secret:create --scope project --name GOOGLE_SERVICES_JSON --type file --value {location of google-services.json}
eas secret:create --scope project --name GOOGLE_SERVICES_PLIST --type file --value {location of googleServiceInfo.plist}
```
## Run a build
Create your build on Android Emulator or iOS Simulator is the easiest way to get it up and running: https://docs.expo.dev/build/setup/#build-for-android-emulatordevice-or-ios-simulator

Run the following commands to start:
```
npm install && npm start
```

## Issues
Contact Brad ([brad@massenergize.org](mailto:brad@massenergize.org)) for troubleshooting.