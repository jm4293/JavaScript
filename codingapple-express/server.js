const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extends: true }));


const MongoClient = require('mongodb').MongoClient
let db;
MongoClient.connect('mongodb+srv://admin:1q2w3e@atlascluster.yw4gtbz.mongodb.net/todoapp?retryWrites=true&w=majority', function (error, client) {
    if (error) return console.log(error)

    db = client.db('todoapp');

    db.collection('post').insertOne({ 이름: 'John', _id: 100 }, function (error, result) {
        console.log('저장완료');
    });

    app.listen(8080, function () {
        console.log('listening on 8080')
    })
})


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

