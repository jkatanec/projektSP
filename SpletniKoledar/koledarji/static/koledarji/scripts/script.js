//menu-accordian:

function accordion(x) {
    if (x.className.indexOf("active") == -1) {
        x.className += " active";
        x.previousElementSibling.className += " open";
    } else {
        x.className = x.className.replace(" active", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" open", "");
    }
}
function accordion1() {
    var x = document.getElementById("acc1");
    accordion(x);
}
function accordion2() {
    var x = document.getElementById("acc2");
    accordion(x);
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
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = d + "." + mn + "." + y + ", "+ h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function goBack() {
    window.history.back();
}