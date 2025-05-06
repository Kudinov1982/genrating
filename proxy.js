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
        const response = await fetch('https://script.google.com/macros/s/AKfycbxLBKTsm3dIw7URZG510TzgD66D1NAudPrY7hlOkWHGehURfTiFITWiASgEBp_oTIp4/exec', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ya29.a0AZYkNZh8u-otIPsdD7u8ffWlyJ5gjMM8gb8JWkGxfa76SkiDJT4z2lKAhcrI1-3Oq14Aro16G_hBvdr2LuPEKnapV19uALkVHPZbXa3tunST898A1b9z3a_fts0bT8I6461rxzU2QDvZmVbFmOk-2a15mOX6m5TYnAUFtenPaCgYKAXUSARUSFQHGX2MiibuPaiH4IT_YLLwj83w3qA0175',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Origin': 'https://metrics.tilda.ws/rating'
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbxLBKTsm3dIw7URZG510TzgD66D1NAudPrY7hlOkWHGehURfTiFITWiASgEBp_oTIp4/exec', {
            headers: { 
                'Authorization': 'Bearer ya29.a0AZYkNZh8u-otIPsdD7u8ffWlyJ5gjMM8gb8JWkGxfa76SkiDJT4z2lKAhcrI1-3Oq14Aro16G_hBvdr2LuPEKnapV19uALkVHPZbXa3tunST898A1b9z3a_fts0bT8I6461rxzU2QDvZmVbFmOk-2a15mOX6m5TYnAUFtenPaCgYKAXUSARUSFQHGX2MiibuPaiH4IT_YLLwj83w3qA0175',
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
