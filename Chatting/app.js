// 서버
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const fs = require('fs');
const io = require('socket.io')(server);

// fs(file system)을 사용하여 './src/index.html' 파일을 불러온다
app.use(express.static('src'));

// req: 클라이언트가 요청한 사항의 정보, res: 서버에서 클라이언트로 전송하는 정보
app.get('/', (req, res) => {
   // readFile( 파일명, (옵션)인코딩 문자열, 콜백함수(에러시 전달되는 값, 파일내용이 읽어졌을 경우 전달되는 값) )
   fs.readFile('./src/index.html', (err, date) => {
      if(err) throw err;
      div
      res.writeHead(200, {'Content-Type' : 'text/html'})
      .write(date)
      .end();
   });
});

// io.sockets.on에 connection 이벤트가 수신되면 실행될 함수를 바인딩한다
// on은 수신, emit은 발신
io.sockets.on('connection', (socket) => {
   socket.on('newUserConnect', (name) => {
      socket.name = name;

      let message = name + '님이 접속했습니다';
      // io.socket은 나를 포함한 전체 소켓
      io.sockets.emit('updateMessage', { name : 'SERVER', message : message });
   });

   socket.on('disconnect', () => {
      let message = socket.name + '님이 퇴장했습니다';
      // socket.broadcase은 나를 제외한 전체 소켓
      socket.broadcast.emit('updateMessage', { name : 'SERVER', message : message });
   });

   socket.on('sendMessage', (data) => {
      data.name = socket.name;   // 메세지를 전송한 주인을 data.name에 추가
      io.sockets.emit('updateMessage', data);
   });
});

server.listen(8080, () => {
   console.log('서버 실행중 씨발련아');
});