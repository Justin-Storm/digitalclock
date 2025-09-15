const timeString = document.querySelector('span');

function updateTime() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    
    timeString.innerHTML = `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}${hour < 12 ? " AM" : " PM"}`;
}

setInterval(() => {
    updateTime();
});