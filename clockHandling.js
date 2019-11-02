
function updateClock(){
    var now = new Date();
    var [days, hours, mins, secs] = weirdTime(now);
    days = toBin(days);hours=toBin(hours);
    mins=toBin(mins);secs=toBin(secs);
    var years = toBin(now.getFullYear());

    $("#secs").text(prependZeros(secs, 3));
    $("#mins").text(prependZeros(mins, 4));
    $("#hours").text(prependZeros(hours,5));
    $("#days").text(prependZeros(days, 9))
    $("#years").text(years);


}

function prependZeros(str, digits){
    var zerosToAdd = digits - str.length;
    return "0".repeat(zerosToAdd) + str;
}

function secondsThisYear(now){
    var days = now.getDay();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    return (days*86400)+(hours*3600)+(mins*60)+secs
}

function weirdTime(now){
    var yearSecs=secondsThisYear(now);
    var [days, dayScraps] = div(yearSecs, 3456);
    var [hours, hourScraps] = div(dayScraps, 128);
    var [mins, secs] = div(hourScraps, 8);
    return [days, hours, mins, secs];
}

function div(num, divisor){
    var dividend=0;
    while (num >= divisor){
        dividend++;
        num-=divisor;
    }
    return [dividend, num]
}

function toBin(num){
    return num.toString(2);
}
