const { AutoPub, Webhook } = require("./src/Structures/AutoPub");
const client = new AutoPub();
client.webhook = new Webhook();
client.start();

// ============= 7/24 UPTIME WEB SUNUCU =============
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('AutoPub bot is alive! ✅');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Web sunucusu ${port} portunda çalışıyor (uptime için)`);
});
// =================================================
