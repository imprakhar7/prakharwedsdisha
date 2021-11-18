const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const tilak= "20 Nov 2021 06:00 PM";
const wedding= "28 Nov 2021 06:00 PM";

function countdown() {
    const weddingDate = new Date(wedding);
    const tilakDate = new Date(tilak);
    const currentDate = new Date();

    const totalSeconds = (weddingDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const totalSeconds1 = (tilakDate - currentDate) / 1000;
    const days1 = Math.floor(totalSeconds1 / 3600 / 24);
    
    daysEl.innerHTML = '0'+ days1 +'/0'+ days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);



