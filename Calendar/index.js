let thisDay = new Date();

const renderCalendar = () => {
    const thisDay_year = thisDay.getFullYear();
    const thisDay_month = thisDay.getMonth();

    const prevMonth = new Date(thisDay_year, thisDay_month, 0);
    const thisMonth = new Date(thisDay_year, thisDay_month + 1, 0);

    const date = [];
    for (let i = 0; i <= prevMonth.getDay(); i++) {
        date.unshift(prevMonth.getDate() - i);
    }
    for (let i = 1; i <= thisMonth.getDate(); i++) {
        date.push(i);
    }
    for (let i = 1; i <= 7 - (thisMonth.getDay() + 1); i++) {
        date.push(i);
    }

    const dates = date

    dates.forEach((date, i) => {
        dates[i] = `<div class="date">${date}</div>`;
    })

    document.getElementById('header_year').innerText = `${thisDay_year}년`;
    document.getElementById('header_month').innerText = `${thisDay_month + 1}월`;
    document.querySelector('.dates').innerHTML = dates.join('');
}
renderCalendar();

const prevMonth_btn = () => {
    thisDay.setMonth(thisDay.getMonth() -1);
    renderCalendar();
}

const nextMonth_btn = () => {
    thisDay.setMonth(thisDay.getMonth() +1);
    renderCalendar();
}

const today_btn = () => {
    thisDay = new Date();
    renderCalendar();
}

// const days = ['일', '월', '화', '수', '목', '금', '토'];
//
// const today = new Date();
// const thisYear  = today.getFullYear();
// const thisMonth = today.getMonth()+1;
// const today_last_thisDate  = today.getDate();
// const today_last_thisDay = today.getDay();
//
// console.log(today);
// console.log(thisYear);
// console.log(thisMonth);
// console.log(today_last_thisDate);
// console.log(days[today_last_thisDay]);
//
// const prev = new Date(thisYear, thisMonth-1, 0);
// const prevMonth_last_date =  prev.getDate();
// const prevMonth_last_day = prev.getDay();
//
// console.log(prev);
// console.log(prev.getMonth());
// console.log(prevMonth_last_date);
// console.log(prevMonth_last_day);
//
// const next = new Date(thisYear, thisMonth+1, 0);
// const nextMonth_last_date = next.getDate();
// const nextMonth_last_day = next.getDay();
//
// console.log(next);
// console.log(next.getMonth()+2);
// console.log(nextMonth_last_date);
// console.log(days[nextMonth_last_day]);