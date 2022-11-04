let monthNames_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthNames_ko = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const now = new Date();
const today = {
    year: now.getFullYear(),
    month_en: monthNames_en[now.getMonth()],
    month_ko: monthNames_ko[now.getMonth()],
    day: now.getDate()
}

for(let key in today) {
    document.getElementById(key).innerText = today[key];
}

// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(monthNames_en[date.getMonth()]);
// console.log(monthNames_ko[date.getMonth()]);
// console.log(date.toLocaleString('en-US', {month:'long'}));
// console.log(date.toLocaleString('en-US', {month:'short'}));
// console.log(date.toLocaleString('ko-KR', {month:'long'}));
// console.log(date.toLocaleString('ko-KR', {month:'short'}));
// console.log(date.toLocaleString('ko-KR', {weekday:'long'}));
// console.log(date.toLocaleString('ko-KR', {weekday:'short'}));