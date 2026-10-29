# PetCare — Interactive Web Demo

This is a browser-based adaptation of the original Android project at https://github.com/mimivladeva/PetCare.

## Run it
1. Extract this ZIP.
2. Open `index.html` in a modern browser.
3. For a local server, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

No build step or JavaScript framework is required. The demo uses HTML, CSS and vanilla JavaScript.

## What is reused
- Original PetCare image assets from `app/src/main/res/drawable/` in the Android repository.
- Original palette from Android resources: cream `#EDE3CE`, orange `#FF8300`, yellow `#FFCF54`.
- Screen concepts reflected by the Android layouts: login, registration, pet list/home, pet profile, GPS/map, and discovery content.

## Interactions
- Welcome → login/register → home
- Home → pet profile, sensors, camera, GPS, discovery, profile
- Demo login/register form validation
- Edit pet name (session only)
- Navigation between screens and responsive simulated phone frame

## Important limitations
This is a web prototype, not a conversion that runs Android Java code inside a browser. The original app's Firebase authentication/database, Android lifecycle, native Google Maps, camera stream and IoT/hardware connections are not live in this prototype. Sensor values and GPS/camera views are illustrative. No real credentials are sent or stored.

The source Android app is preserved separately in the original repository. This demo is intended as an interactive portfolio showcase, not as a production app.
