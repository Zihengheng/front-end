let num = 1;
const timer = setInterval(()=>{
    console.log(num);
    num++;
    if(num === 5){
        clearInterval(timer);
    }
}, 1000);

//setTimeout()

