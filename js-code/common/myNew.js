function myNew(func){
    var res = {};
    if(func.prototype!== null){
        res._poto_ = func.prototype;
    }
    
}