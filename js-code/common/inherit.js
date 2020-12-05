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

// var ins1 = new Sub('ins1',18);
// console.log(ins1);
// ins1.sayname();

//原型式继承
//借助原型，基于已有的对象创建新对象。
var person = {
    name:'Person'
};

var anthorp = Object.create(person);
//得到一个以person为原型的构造函数的实例
console.log(anthorp);
console.log(anthorp.name);