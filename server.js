const { readFileSync, writeFileSync } = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf-8').trim(); // Use 'utf-8' to get a string
    console.log('count', count);

    const newCount = parseInt(count, 10) + 1;

    writeFileSync('./count.txt', newCount.toString());

    res.send(`
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset="utf-8" />
            <title>Test</title>
        </head>
        <body>
            <p>Page views: ${newCount}</p>
        </body>
        </html>
    `);
});

app.listen(5000, () => console.log('http://localhost:5000/'));
