const newYear = '1 Jan 2021'

const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    //console.log(newYearDate - currentDate)

    let seconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds /3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    seconds = Math.floor(seconds) % 60;

    //console.log(days, hours, minutes, seconds);
    //console.log( d, h, m, s);

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;

      
}



countDown()

setInterval(countDown, 1000);