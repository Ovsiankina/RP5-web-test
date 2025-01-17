const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt');
    console.log('count', count)

    const newCount = parseInt(count) + 1

    writeFileSync('./count.txt', newCount);

    res.send(`
    <!DOCTYPE html>
    <html lang='eng'>
    <head>
        <meta charset="utf.8" />
        <title> test </title>
    </head>
    <body>
        <p>Page views : ${newCount}</p>
    </body>
    `)

});

app.listen(5000, () => console.log('http://localhost:5000/'));
