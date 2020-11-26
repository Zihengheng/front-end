//组合继承
// 原型链+构造函数的方式
//Super中定义属性name
function Super(name){
    this.name = name;
    this.color = ['red','green'];
}

//Super的原型中定义方法
Super.prototype.sayname = function(){
    console.log(this.name);
}
function Sub(name, age){
    Super.call(this,name);
    this.age = age;
}
//通过原型链的方式继承方法
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var ins1 = new Sub('ins1',18);
console.log(ins1);
ins1.sayname();