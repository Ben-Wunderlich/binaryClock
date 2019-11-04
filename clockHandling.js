
function updateClock(){
    var now = new Date()
    var timeArr = weirdTime(now);

    for(i=0;i<timeArr.length;i++){
        $("#"+i).text(timeArr[i]);
    }
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
    var currTime = 256
    var tot=powerProduct(currTime);
    var timeArr = [];
    var result;
    while(currTime >= 1){
        result = div(allSecs, tot);
        timeArr.push(prependZeros(toBin(result[0]), powa(currTime)));
        allSecs = result[1];

        tot /= currTime;
        currTime /= 2;
    }
    return timeArr.reverse();
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
