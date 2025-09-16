const timeString = document.querySelector('span');

function updateTime() {
    const time = new Date();
    let hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;

    timeString.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${ampm}`;
}

setInterval(updateTime, 1000);
