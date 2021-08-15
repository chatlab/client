import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow | null

const installExtensions = async () => {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log) // eslint-disable-line no-console
}

const createWindow = async () => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtensions()
    }

    win = new BrowserWindow({ width: 800, height: 600, title: 'Chatlab' })

    if (process.env.NODE_ENV !== 'production') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
        win.loadURL(`http://localhost:2003`)
        win.webContents.once('dom-ready', () => {
            win!.webContents.openDevTools()
        })
        return
    }

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
