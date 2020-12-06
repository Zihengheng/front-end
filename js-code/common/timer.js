let num = 1;
const timer = setInterval(()=>{
    console.log(num);
    num++;
    if(num === 5){
        clearInterval(timer);
    }
}, 1000);

//setTimeout()
const timer2 = setTimeout(()=>{
    console.log(1);
},3000);

console.log('Hi');
