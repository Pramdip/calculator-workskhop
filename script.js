function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerText = time;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = now.getFullYear();
    var month = months[now.getMonth()];
    var day = days[now.getDay()];
    var date = now.getDate();
    var dateString = day + ', ' + month + ' ' + date + ', ' + year;
    document.getElementById('date').innerText = dateString;
}
setInterval(updateClock, 1000);