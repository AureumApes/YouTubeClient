module.exports = {
    name: "shortcuts",
    /**
     * @typedef CopyUrl
     * @param url URl to copy
     * @param clipboard THe Clipboard from Electron
     */
    copyUrl(url, clipboard) {
        clipboard.writeText(url, "clipboard")
    }
}