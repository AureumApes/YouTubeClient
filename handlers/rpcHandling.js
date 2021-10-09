const DiscordRPC = require("discord-rpc")



module.exports  = {
    name: "RpcHandling",
    /**
     * @typedef {setGame}
     * @param home Is home?
     * @param rpc RPC Object
     * @param page Current URL
     * @param name Current Tabs Name
     */
    async setGame(home, rpc, page = null, name = null) {
        await rpc.clearActivity().catch(console.error)
        if (home) {
            await rpc.setActivity({
                largeImageKey: "large",
                largeImageText: "YouTube",
                details: "Client by AureumApes",
                state: "Home"
            })
        } else {
            await rpc.setActivity({
                largeImageKey: "large",
                largeImageText: "YouTube",
                details: "Client by AureumApes",
                state: name
            })
        }
    }
}