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
        const response = await fetch('https://script.google.com/macros/s/AKfycbyOeqmRR7EgCewXgiSIFE944FhUtKlBUfWRQo2_P1U6WuBfVKWmfi18iPgdqKY9c_PC/exec', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Origin': 'https://your-tilda-page.tilda.ws'
            },
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbyOeqmRR7EgCewXgiSIFE944FhUtKlBUfWRQo2_P1U6WuBfVKWmfi18iPgdqKY9c_PC/exec', {
            headers: { 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Origin': 'https://metrics.tilda.ws/rating'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(process.env.PORT || 3000, () => console.log('Прокси запущен'));
