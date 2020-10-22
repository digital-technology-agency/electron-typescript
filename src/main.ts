import {app, BrowserWindow} from "electron";
import * as path from "path";

const title = 'Агентство цифровых технологий';
let win;

app.on('ready', function () {
    win = new BrowserWindow({
        fullscreen: true,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: false,
        },
    });
    app.setBadgeCount(1);
    win.loadFile('../src/index.html')
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
