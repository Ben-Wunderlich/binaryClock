
function updateClock(){
    var now = new Date();
    var secs = toBin(weirdSecs(now));
    var mins = toBin(weirdMins(now));
    var hours = toBin(now.getHours());
    $("#secs").text(prependZeros(secs, 6));
    $("#mins").text(prependZeros(mins, 6));
    $("#hours").text(prependZeros(hours,5));

}

function prependZeros(str, digits){
    var zerosToAdd = digits - str.length;
    return "0".repeat(zerosToAdd) + str;
}

//64 seconds in a minute
function weirdSecs(now){
    var normSecs = secondsThisHour(now);
    return normSecs % 64;
}

function secondsThisHour(now){
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    return (mins*60)+secs
}

function weirdMins(now){
    return Math.floor(secondsThisHour(now)/64);
}

function toBin(num){
    return num.toString(2);
}