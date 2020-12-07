function debounce(fn,delay){
   var timer; //维护一个timer
   return function(){
       var _this = this;
       var args = arguments;
       if(timer){
           clearTimeout(timer);
       }
       timer = setTimeout(function(){
           fn.apply(_this,args);
       },delay); 
   };
}