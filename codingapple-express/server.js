const express = require('exress');
const app = express();



app.get('/beauty', function(res, req){
    res.send('beauty page');
})

app.get('/', function(res, req){
    res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function(){
    console.log('8080 on');
});