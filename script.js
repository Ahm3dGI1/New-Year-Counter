const Eday = document.querySelector('.day');
const Ehours = document.querySelector('.hours');
const Eminutes = document.querySelector('.minutes');
const Eseconds = document.querySelector('.seconds');

const year = document.querySelector('.year')


UpdateCountdown();

function UpdateCountdown() {
    const newYearTime = new Date("Jan 1, " + year.value + " 00:00:00").getTime();

    const now = new Date().getTime();
    const gap = newYearTime - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const d = Math.floor(gap / days);
    const h = Math.floor((gap % days) / hours);
    const m = Math.floor((gap % hours) / minutes);
    const s = Math.floor((gap % minutes) / seconds);

    Eday.innerHTML = d;
    Ehours.innerHTML = h;
    Eminutes.innerHTML = m;
    Eseconds.innerHTML = s;

    setTimeout(UpdateCountdown, 1000)
}