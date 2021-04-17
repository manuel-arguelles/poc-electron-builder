const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        'width': 1376,
        'height': 768
    });

    win.loadFile('src/renderer/index.html');

    win.setMenu(null);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
