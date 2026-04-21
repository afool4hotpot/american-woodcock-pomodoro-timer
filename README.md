# american-woodcock-pomodoro-timer

A desktop Pomodoro timer application built with Electron.

## Prerequisites

Before running this app, you'll need:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Or install via Homebrew: `brew install node`

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

## Running the App

```bash
npm start
```

This will launch the Electron application.

## Building for Production

To create a distributable app, first install electron-builder:

```bash
npm install --save-dev electron-builder
```

Then add a build script to `package.json`:

```json
"scripts": {
  "start": "electron .",
  "build": "electron-builder"
}
```

Run the build:

```bash
npm run build
```