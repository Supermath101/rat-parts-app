# Rat Parts App

This is an app used for looking up parts for the Great Neck South HS Robotics team! This app is published at [rat-parts-app.supermath101.tk](https://rat-parts-app.supermath101.tk/). To test out locally, first run `npm install` once, then run `npm run dev`. The app will now auto-update on each code change.

## General Folder Structure

The folders are structured like this:

```
/ - Project Root
|  src/ - Primary Code Folder
|  |  components/ - Folder for all general purpose React components.
|  |  |  app.js - Starting App Component; Where all the code begins
|  |  routes/ - Folder containing subfolders, one for each "webpage".
|  |  style/ - Folder for Stylesheets.
```

---

## Originally Stated CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```
