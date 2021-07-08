let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function sec() {
    if (a.getSeconds() < 10) {
        var seconds = `0` + a.getSeconds();
        return seconds;
    }
    else {
        return a.getSeconds();
    }
}

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ":" + a.getMinutes() + ":" + sec();
    document.getElementById('time').innerHTML = time + `<br>on ` + date;
}, 1000);