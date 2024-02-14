// full-stack-application-test/public/server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/frage', async (req, res) => {
    const result = await db.getFrageAntwort();
    res.json(result);
});

app.post('/frage', async (req, res) => {
    await db.addFrageAntwort(req.body.frage, req.body.antwort);
    res.status(201).send();
});

app.patch('/frage/:id', async (req, res) => {
    try {
        await db.updateFrageAntwort(req.params.id, req.body.frage, req.body.antwort);
        res.status(200).send({ message: "Erfolgreich aktualisiert" });
    } catch (err) {
        res.status(500).send({ message: "Ein Fehler ist aufgetreten" });
    }
});

app.delete('/frage/:id', async (req, res) => {
    try {
        await db.deleteRowFrageAntwort(req.params.id);
        res.status(200).send({ message: "Erfolgreich gelöscht" });
    } catch (err) {
        res.status(500).send({ message: "Ein Fehler ist aufgetreten" });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
