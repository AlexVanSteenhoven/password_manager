const electon = require("electron");
const app = electon.app;
const browserWindow = electon.BrowserWindow;
const path = require("path");

const createWindow = () => {
  let startupView = new browserWindow({
    // Setting up window sizes
    width: 500,
    height: 900,
    maxHeight: 900,
    maxWidth: 500,

    // Other options
    frame: false,
    resizable: false,
    titleBarStyle: "hidden",
    backgroundColor: "#202121",
    maximizable: false,
    show: false,

    // prefferences
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  startupView.loadURL(
    "file://" + path.join(__dirname + "/frontend/login.html")
  );

  startupView.once("ready-to-show", () => startupView.show());
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
