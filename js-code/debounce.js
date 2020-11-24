function debounce (func){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{func.apply(this, arguments)},500);
    }
}