const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    backgroundColor: "#00000000",
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
  ipcMain.on('close-window', () => win.close());
  ipcMain.on('minimize-window', () => win.minimize());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});