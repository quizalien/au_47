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
            content: "**Hoşgeldiniz!** Aramıza katıldığın için teşekkürler 🎉",
            image: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: "Kanala Git",
                            url: "https://discord.com/channels/SUNUCU_ID/KANAL_ID"
                        }
                    ]
                }
            ]
        }
    ],

    embed2: [
        {
            content: "**Hoşgeldiniz!** Aramıza katıldığın için teşekkürler 🎉",
            image: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: "Kanala Git",
                            url: "https://discord.com/channels/SUNUCU_ID/KANAL_ID"
                        }
                    ]
                }
            ]
        }
    ]
};
