var name = "window";
var obj = {
    name:'obj',
    normal(){
        return ()=>{
            console.log(this.name);
        };
    },
    arrow:()=>{
        return function (){
            console.log(this.name);
        };
    },
};
var obj1 = {name:'obj1'};
var a = obj.normal.call(obj1)();
var b = obj.arrow.call(obj1)();
