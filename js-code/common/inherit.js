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
//Sub 通过构造函数的方式继承Super的属性
// + 定义自己的属性
function Sub(name,age){
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
// console.log(person.prototype);
// console.log(anthorp.name);
//传入两个参数的情况
var anthorp2 = Object.create(person,{
    name:{value:'anthorp2'},
    age:{value:18}
})

// console.log(anthorp2.name);
//寄生继承
//创建一个用于封装继承过程的函数，在函数内部增强对象。并返回对象。
function myCreate (obj){
    var clone = object(obj);
    clone.sayHi = function(){
        console.log("hi");
    }
}