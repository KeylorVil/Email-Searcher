// node js -> express -> basic example: static folder, 404 page

const express = require('express');
const app = express();
const path = require('path');
const port = 5000;


app.use('/src', express.static(__dirname + '/src'));
app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));