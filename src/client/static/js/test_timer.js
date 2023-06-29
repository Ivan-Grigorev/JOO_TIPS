var lesson_timer = setInterval(function() {

    var nowUTC = new Date(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours(),
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds());

    var distance = new Date(document.getElementById('lesson_time').value).getTime() - nowUTC;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes == "00" && seconds < "31") {
        document.getElementById('lesson_timer').style.color = 'red';
    }

    document.getElementById('lesson_timer').innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
        clearInterval(lesson_timer);
        document.getElementById('lesson_timer').innerHTML = "00:00";
    }

}, 1000);


var test_timer = setInterval(function() {

    var nowUTC = new Date(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours(),
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds());

    var distance = new Date(document.getElementById('timer').value).getTime() - nowUTC;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes == "00" && seconds < "31") {
        document.getElementById('test_timer').style.color = "red";
    }

    document.getElementById('test_timer').innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
        clearInterval(test_timer);
        document.getElementById('test_timer').innerHTML = "00:00";
    }

}, 1000);
