require('dotenv').config();

const express = require('express');
const { hidePoweredBy } = require('helmet');
const { join } = require('node:path');
const bodyParser = require('body-parser');
const app = express();

app.use(hidePoweredBy());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(join(__dirname + '/views/index.html'));
});

app.post('/api/format', (req, res) => {
	res.status(200).send({ formattedText: req.body.textarea.replace(/[ *]/g, '').split('\n').slice(2).join('\n') });
});

app.listen(process.env.PORT, () => {
	console.log(`App is ready. http://127.0.0.1:${process.env.PORT}`);
});