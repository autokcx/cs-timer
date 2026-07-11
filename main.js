const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 380,
    height: 560,
    resizable: false,
    title: 'CyberPunk 闹钟',
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 14, y: 14 },
    backgroundColor: '#05070f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// 渲染进程请求弹出系统通知
ipcMain.on('notify', (_event, { title, body }) => {
  if (Notification.isSupported()) {
    new Notification({ title, body, silent: true }).show();
  }
});
