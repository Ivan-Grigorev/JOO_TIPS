var lesson_timer = setInterval(function() {

    var now = new Date();
    var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
               now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    var distance = new Date(document.getElementById("lesson_time").value).getTime() - nowUTC;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes == "00" && seconds < "31") {
        document.getElementById("lesson_timer").style.color = "red";
    }

    document.getElementById("lesson_timer").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
        clearInterval(lesson_timer);
        document.getElementById("lesson_timer").innerHTML = "00:00";
    }

}, 1000);
