function setClock() {
    let dateInfo = new Date();
    let year = dateInfo.getFullYear();
    let month = dateInfo.getMonth() + 1;
    let date = dateInfo.getDate();
    let hour = modifytime(dateInfo.getHours());
    let min = modifytime(dateInfo.getMinutes());
    let sec = modifytime(dateInfo.getSeconds());

    document.getElementById("date").innerHTML = `${year}년 ${month}월 ${date}일`;
    document.getElementById("time").innerHTML = `${hour} : ${min} : ${sec}`;
}

function modifytime(time) {
    if(parseInt(time) < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

window.onload = () => {
    setInterval(setClock, 1000);
}