const express = require('express');
const cors = require('cors');
const axios = require("axios")
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

let client;

app.get('/initialize', async (req, res) => {
    client = new Client({ authStrategy: new LocalAuth() });

    client.on('qr', async (qr) => {
        res.send({ qrCode: qr });
        console.log('qr send!');
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        res.send({ ready: true });
    });

    client.on('disconnected', () => {
        console.log('Client disconnected!');
    });

    client.on('message', async (message) => {
        console.log(message.body);
        if (message.body === '!ping') {
            await message.reply('pong');
        }
    });

    client.initialize();
});


app.post('/sendMsg', async (req, res) => {
    const { number, message, media } = req.body;
    const chatId = `${number}@c.us`;

    if (media) {
        const { data: mediaData } = await axios.get(media, { responseType: "arraybuffer" })
        var mediaFile = await new MessageMedia('image/png', mediaData.toString("base64"), 'botWhats.png');
    }

    if (!client) {
        res.json({ success: false, error: 'Client not initialized' });
        return;
    }

    try {
        if (media) {
            await client.sendMessage(chatId, mediaFile, { caption: message });
        } else {
            await client.sendMessage(chatId, message);
        }
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

app.get('/destroy', async (req, res) => {
    try {
        await client.destroy();
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
})

app.listen(5000, () => console.log('Server listening on port 5000'));
