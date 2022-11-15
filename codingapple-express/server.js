const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extends: true }));

const MongoClient = require('mongodb').

app.listen(8080, function () {
    console.log('8080 on');
});

app.get('/beauty', function (req, res) {
    res.send('beauty page');
})

app.get('/write', function (req, res) {
    res.sendFile(__dirname + '/write.html');
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/add', function (req, res) {
    res.send('전송완료')
    console.log(req.body.title);
    console.log(req.body.date);
})

