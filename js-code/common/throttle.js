function trottle(fn, delay){
    let flag = true;
    let timer = null;
    return function(...args){
        let _this = this;
        if(!flag) return; //if flag == false;

        flag = false;
        clearTimeout(timer);
        timer = setTimeout(()=>{
        fn.apply(_this,args);
        flag = true;}
        ,delay)
    }
}