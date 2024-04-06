const hour = document.querySelector("#hour");
const min = document.querySelector("#min");

setInterval(() => {
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()

    hour.innerHTML = `${formateTime(dHour)}`
    min.innerHTML = `${formateTime(dMinute)}`
}, 1000);

function formateTime(time) {
    return time < 10 ? '0' + time : time
}