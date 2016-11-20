<<<<<<< HEAD
//menu-accordian:
function accordian(x) {
    if (x.className.indexOf("active") == -1) {
        x.className += " active";
        x.previousElementSibling.className += " open";
    } else {
        x.className = x.className.replace(" active", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" open", "");
    }
}
function accordian1() {
    var x = document.getElementById("acc1");
    accordian(x);
}
function accordian2() {
    var x = document.getElementById("acc2");
    accordian(x);
}

//date and time on page:
function startTime() {
    
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var d = now.getDate();
    var mn = now.getMonth();
    var y = now.getFullYear();
    var weekday = new Array(7);
    weekday[0] = "Nedelja";
    weekday[1] = "Ponedeljek";
    weekday[2] = "Torek";
    weekday[3] = "Sreda";
    weekday[4] = "Èetrtek";
    weekday[5] = "Petek";
    weekday[6] = "Sobota";
    var n = weekday[now.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = n + ", " + d + "." + mn + "." + y + ", "+ h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
=======
//menu-accordian:
function accordian(x) {
    if (x.className.indexOf("active") == -1) {
        x.className += " active";
        x.previousElementSibling.className += " open";
    } else {
        x.className = x.className.replace(" active", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" open", "");
    }
}
function accordian1() {
    var x = document.getElementById("acc1");
    accordian(x);
}
function accordian2() {
    var x = document.getElementById("acc2");
    accordian(x);
}

//date and time on page:
function startTime() {
    
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var d = now.getDate();
    var mn = now.getMonth();
    var y = now.getFullYear();
    var weekday = new Array(7);
    weekday[0] = "Nedelja";
    weekday[1] = "Ponedeljek";
    weekday[2] = "Torek";
    weekday[3] = "Sreda";
    weekday[4] = "Èetrtek";
    weekday[5] = "Petek";
    weekday[6] = "Sobota";
    var n = weekday[now.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = n + ", " + d + "." + mn + "." + y + ", "+ h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
>>>>>>> 8274ce28c124bf2660f997ab969d2e6ddd7bd673
}