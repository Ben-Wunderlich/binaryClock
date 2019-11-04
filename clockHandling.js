
function updateClock(){
    var now = new Date()
    var timeArr = weirdTime(now);

    timeArr.forEach(function(element) {
        console.log(element);
    });
    /*days = toBin(days);hours=toBin(hours);
    mins=toBin(mins);secs=toBin(secs);

    $("#secs").text(prependZeros(secs, 3));
    $("#mins").text(prependZeros(mins, 4));
    $("#hours").text(prependZeros(hours,5));
    $("#days").text(prependZeros(days, 9))
    $("#years").text(years);*/


}

function prependZeros(str, digits){
    var zerosToAdd = digits - str.length;
    return "0".repeat(zerosToAdd) + str;
}

function totalSeconds(now){
    return now.getTime()/1000;
}

function powerProduct(num){
    num/=2
    var total = 0;
    while(num>=2){
        total*=num
        num/=2
    }
}

function weirdTime(now){
    var allSecs = totalSeconds(now);
    var currTime = 128
    var tot=powerProduct(128);
    var timeArr = [];
    var min=2;
    var result;
    while(currTime >= min){
        result = div(allSecs, tot);
        tot/=currTime;
        timeArr.push(toBin(result[1]));
        allSecs = result[0];
        currTime/=2;
    }
    return timeArr;

    var yearSecs=totalSeconds(now);
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
