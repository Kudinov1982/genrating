const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxKlYSxbzsMSccatgQOam5egHyrf6EBeGALAvljRManYw72dnhPzH4pgQ1_gy2wAEzK/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxKlYSxbzsMSccatgQOam5egHyrf6EBeGALAvljRManYw72dnhPzH4pgQ1_gy2wAEzK/exec');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(process.env.PORT || 3000, () => console.log('Прокси запущен'));
