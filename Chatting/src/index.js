// 클라이언트

'use strict'

let socket = io();

// on은 수신, emit은 발신
socket.on('connect', () => {
    let name = prompt('대화명을 입력해주세요.', '');
    socket.emit('newUserConnect', name);
});

let chatWindow = document.getElementById('chatWindow');
socket.on('updateMessage', (data) => {
    if(data.name === 'SERVER') {
        // if은 서버에서 작성되어 전달되어오는 텍스트
        let infoEl = document.getElementById('info');
        infoEl.innerHTML = data.message;

        setTimeout( () => {
            infoEl.innerText = '';
        }, 1000);
    } else {
         // else은 사용자가 작성하여 전달되어오는 텍스트
         let chatMessageEl = drawchatMessage(data);
         chatWindow.appendChild(chatMessageEl);
    }
});

function drawchatMessage(data) {
    let wrap = document.createElement('p');
    let message = document.createElement('span');
    let name = document.createElement('span');

    name.innerText = data.name;
    message.innerText = data.message;

    name.classList.add('out__user__name');
    message.classList.add('output__user__message');

    wrap.classList.add('out__user');
    wrap.dataset.id = socket.id;

    wrap.appendChild(name);
    wrap.appendChild(message);

    return wrap;
}

let sendButton = document.getElementById('chatMessageSendBtn');
let chatInput = document.getElementById('chatInput');

sendButton.addEventListener('click', () => {
    let message = chatInput.value;
    if(!message) return false;

    socket.emit('sendMessage', {message});
    chatInput.value = '';
});