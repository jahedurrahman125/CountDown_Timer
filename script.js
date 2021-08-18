const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const nextYear = "1 Jan 2022";

function countdown_timers(){
    const newYearsDate = new Date(nextYear);
    const currentDate = new Date();

    const diff = (newYearsDate-currentDate)/1000;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60; 
    
    daysEl.innerHTML = ('0'+days).slice(-2);
    hoursEl.innerHTML = ('0'+hours).slice(-2);
    minutesEl.innerHTML = ('0'+minutes).slice(-2);
    secondsEl.innerHTML = ('0'+seconds).slice(-2);
};

countdown_timers();
setInterval(countdown_timers, 1000);
