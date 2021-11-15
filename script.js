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
    
    daysEl.innerHTML = days1 +'/'+ days;
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


const container = document.querySelector('.countdown-container')
const fireworks = new Fireworks(container, {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 5,
      autoresize: true,
      brightness: { 
        min: 50, 
        max: 80,
        decay: { min: 0.015, max: 0.03 }
      }
      mouse: { 
        click: false, 
        move: false, 
        max: 3 
      }
      boundaries: { 
        x: 50, 
        y: 50, 
        width: container.clientWidth, 
        height: container.clientHeight 
      }      
});

fireworks.start();
