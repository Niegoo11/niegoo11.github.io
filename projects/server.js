const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/convert', (req, res) => {
    const shortUrl = req.query.url;
    request({ url: shortUrl, followRedirect: false }, (error, response, body) => {
        if (error) {
            return res.status(500).send('Fehler bei der Konvertierung des Links');
        }
        const longUrl = response.headers.location;
        res.send({ longUrl: longUrl });
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
