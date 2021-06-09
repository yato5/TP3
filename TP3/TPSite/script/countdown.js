const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secEl = document.getElementById('secs');

const Birthday = "20 november 2021";

function countdown(){
    const newBirthday = new Date(Birthday);
    const currentDate = new Date();
    const totalsec = (newBirthday - currentDate) / 1000;

    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const min = Math.floor(totalsec / 60) % 60;
    const sec = Math.floor(totalsec) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;

}

countdown();
setInterval(countdown, 1000);