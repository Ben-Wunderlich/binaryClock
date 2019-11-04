
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
    return Math.floor(now.getTime()/1000);
}

function powerProduct(num){
    var total = 1;
    while(num>=1){
        total*=num
        num/=2
    }
    return total;
}

function powa(num){
    i=0
    while(num >=1){
        i++;
        num/=2;
    }
    return i;
}

function weirdTime(now){
    var allSecs = totalSeconds(now);
    var currTime = 128
    var tot=powerProduct(128);
    var timeArr = [];
    var min=1;
    var result;
    while(currTime >= min){
        result = div(allSecs, tot);
        timeArr.push(prependZeros(toBin(result[0]), powa(currTime)));
        allSecs = result[1];

        tot /= currTime;
        currTime /= 2;
    }
    return timeArr;
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
