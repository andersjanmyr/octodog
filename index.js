var express = require('express')
var app = express()

app.get('/', function (req, res) {
    console.log('/');
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(__dirname + "/" + "octocat.txt");
})

app.get('/image', function (req, res) {
    console.log('/image');
    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(__dirname + "/images/" + "octodog.jpg");
})

var server = app.listen(8080, function () {
    console.log('Server listening on port 8080!')
})
module.exports = server;
