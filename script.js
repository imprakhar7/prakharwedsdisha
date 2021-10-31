const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

/*const daysEl1 = document.getElementById("days1");
const hoursEl1 = document.getElementById("hours1");
const minsEl1 = document.getElementById("mins1");
const secondsEl1 = document.getElementById("seconds1");*/

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
    /*const hours1 = Math.floor(totalSeconds1 / 3600) % 24;
    const mins1 = Math.floor(totalSeconds1 / 60) % 60;
    const seconds1 = Math.floor(totalSeconds1) % 60;*/
    
    daysEl.innerHTML = days1 +'/'+ days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

   

    /*daysEl1.innerHTML = days1;
    hoursEl1.innerHTML = formatTime(hours1);
    minsEl1.innerHTML = formatTime(mins1);
    secondsEl1.innerHTML = formatTime(seconds1);*/
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
