# Welcome to Henri Potier Boutique 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)]()

> 🏠 An app that shows you best books of Henri Potier


### ✨ [Demo](http://localhost:8080/)

## Architecture

The app is made with React, typescript and micro-frontend architecture using webpack's plugin ModuleFederationPlugin splited in 4 folders (app):

storeApp : contains the store shared with all remotes apps
productApp: remote app, handling book display
hearApp: remote app
container: remote app, containing all remotes app.

## Installation & Usage

```sh
Go to all app folder and run:
1. yarn install
2. yarn start
```

## Author

👤 **Sakina DEBICHE**
