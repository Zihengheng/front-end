let num = 1;

const timer = setInterval(function () {
    console.log(num);  //每间隔一秒，打印一次num的值
    num ++;
    if(num === 5) {  //打印四次之后，就清除定时器
        clearInterval(timer);
    }

}, 1000);
