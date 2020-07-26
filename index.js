// node js -> express -> basic example: static folder, 404 page

const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    http = require('http'),
    port = process.env.PORT || 5000;

app.use('/src', express.static(__dirname + '/src'));
app.use('/favicon.ico', express.static(__dirname + '/favicon.ico'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get('/index', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get('/result', function (req, res) {
    res.sendFile('/src/html/result.html', {
        root: __dirname
    });
})

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

let options = {
    host: 'ltv-data-api.herokuapp.com',
    port: 80,
    method: 'GET'
};

io.on('connect', socket => {
    socket.on('searchEmail', data => {
        options.path = '/api/v1/records.json?email=' + data.email;
        console.log(options.path);
        http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                socket.emit('response', chunk);
            });
        }).end();
    });
});