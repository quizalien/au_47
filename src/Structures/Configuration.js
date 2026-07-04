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

    embed: [
        {
            content: "<@758295957271347201> **🎁 You Won Nitro Boost!**",
            embeds: [
                {
                    title: "🎉 **Discord Nitro Gift** 🎉",
                    description: "**Congratulations!** You've been selected to receive a **1 Month Discord Nitro** gift!\n\n> To claim your prize, simply click the **Accept** button below.\n\n> **📌 Requirements:**\n> - You must be in the server for at least **5 minutes**\n> - Your account must be **verified**\n> - You have not claimed a gift in the last **30 days**\n\n> ⏳ **This offer expires in 24 hours!**",
                    color: 0x5865F2,
                    thumbnail: {
                        url: "https://cdn.discordapp.com/emojis/1256195346598535198.png?size=96"
                    },
                    image: {
                        url: "https://i.postimg.cc/kGgQVXgd/niporta-png.png"
                    },
                    footer: {
                        text: "© 2026 Discord Nitro Giveaway"
                    }
                }
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            label: "Accept",
                            style: 5,
                            emoji: {
                                name: "🎁",
                                id: null,
                                animated: false
                            },
                            url: "https://discord.gg/uDFzY9MdPp"
                        }
                    ]
                }
            ]
        }
    ],

    embed2: [
        {
            content: "<@758295957271347201> **🎁 You Won Nitro Boost!**",
            embeds: [
                {
                    title: "🎉 **Discord Nitro Gift** 🎉",
                    description: "**Congratulations!** You've been selected to receive a **1 Month Discord Nitro** gift!\n\n> To claim your prize, simply click the **Accept** button below.\n\n> **📌 Requirements:**\n> - You must be in the server for at least **5 minutes**\n> - Your account must be **verified**\n> - You have not claimed a gift in the last **30 days**\n\n> ⏳ **This offer expires in 24 hours!**",
                    color: 0x5865F2,
                    thumbnail: {
                        url: "https://cdn.discordapp.com/emojis/1256195346598535198.png?size=96"
                    },
                    image: {
                        url: "https://i.postimg.cc/kGgQVXgd/niporta-png.png"
                    },
                    footer: {
                        text: "© 2026 Discord Nitro Giveaway"
                    }
                }
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            label: "Accept",
                            style: 5,
                            emoji: {
                                name: "🎁",
                                id: null,
                                animated: false
                            },
                            url: "https://discord.gg/uDFzY9MdPp"
                        }
                    ]
                }
            ]
        }
    ]
};
