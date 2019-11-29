function updateClock(){
    updateTillElement();
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

//is just log base 2, maybe
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

//might be faster way with a formula
function maxTime(len){
    var product=1
    for(i=0;i<= len; i++){
        product *= Math.pow(2,i);
    }
    return product;
}

function secondToNatural(secs){
    var [years, yearBits] = div(secs, 31536000)
    var [months, monthBits] = div(yearBits, 2592000)
    var [weeks, weekBits] = div(monthBits, 604800)
    var [days, dayBits] = div(weekBits, 86400)
    var [hours, hourbits] = div(dayBits, 3600)
    var [minutes, seconds] = div(hourbits, 60)
    var str="";
    if(years > 0){str+=years+" years ";}
    if(months > 0){str+=months+" months ";}
    if(weeks > 0){str+=weeks+" weeks ";}
    if(days > 0){str+=days+" days ";}
    if(hours > 0){str+=hours+" hours ";}
    if(minutes > 0){str+=minutes+" minutes ";}
    if(seconds > 0){str+=seconds+" seconds ";}
    return str;
}

function updateTime(el){
    var contents = $(el).text();
    var len = contents.length;
    var max = maxTime(len)
    var allTime = totalSeconds(new Date());
    var trimmedTime = div(allTime%max, max)[1];
    var timeTill = max - trimmedTime
    $("#nextReset").text("next reset for that element in "+secondToNatural(timeTill));
}

function updateTillElement(){
    var el = $(".lastChecked").get()
    if(el.length > 0){
        updateTime(el[0])
    }
}

function changeHighlight(el){
    var className = "lastChecked";
    $(".aTime").removeClass(className);
    $(el).addClass(className);
}

function clearHighlight(){
    $(".aTime").removeClass("lastChecked");
}

var baseMessage = "hover over an element to see how long till it resets";

function resetTillMessage(){
    $("#nextReset").text(baseMessage);
}

$(".aTime").mouseover(function() { 
    updateTime(this);
    changeHighlight(this);
});

$("#times").mouseleave(function(){
    clearHighlight();
    resetTillMessage();
})