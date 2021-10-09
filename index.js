// Implementing Stuff
const {app, BrowserWindow, clipboard, globalShortcut} = require("electron")
const DiscordRPC = require("discord-rpc")
const rpc = new DiscordRPC.Client({transport: "ipc"})
const config = require("./config.json")
const { setGame } = require("./handlers/rpcHandling");
const {copyUrl} = require("./handlers/shortcuts")

app.on("ready", () => {
    globalShortcut.register("CommandOrControl+C+U", () => {
        copyUrl(win.webContents.getURL(), clipboard)
    })
    let win = new BrowserWindow({
        show: false
    })
    win.maximize()
    win.show()
    win.loadURL("https://youtube.com").then()

    rpc.login({clientId: config.clientID}).catch(console.error);
    setGame(true, rpc).then()
    win.webContents.on("update-target-url", () => {
        if (win.webContents.getURL().endsWith(".com") || win.webContents.getURL().endsWith(".com/")) {
            setGame(true, rpc).then()
        } else {
            setGame(false, rpc, win.webContents.getURL(), win.webContents.getTitle().replace(" - YouTube", "")).then()
        }
    })
    win.on("close", () => {
        rpc.clearActivity().then()
    })
})