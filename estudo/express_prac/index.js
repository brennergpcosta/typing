const express = require('express');
const Members = require('./data/members')

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/api/members', (req, res) => {
    res.status(200).json(Members);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);