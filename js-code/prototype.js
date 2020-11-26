//printer
function print(content){
    return console.log(content);
}
function Person(){
    let name = "Person";
    this.height = "160cm";
}
Person.prototype.age = "18";
var p1 = new Person();
// console.log(Person.prototype);
// console.log(p1.height);
// console.log(p1._proto_);

//prototype chain
function Super(){
    this.color = ['red','blue','black'];
}
//child constructor
function Sub(){}
//child inherits from parent
Sub.prototype = new Super();
// new a child 
var ins1 = new Sub();
ins1.color.push('green')
var ins2 = new Sub();

print(ins2.color);

