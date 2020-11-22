//object & constructor
//printer
function print(content){
    console.log(content);
}
//利用构造函数自定义对象
// var stu1 = new Student('ssh');
// print(stu1);
// stu1.sayHi();

// var stu2 = new Student('aad');
// print(stu2);
// stu2.sayHi();

//build a constructor
function Student(name){
    //this指的是当前对象实例【重要】
    this.name = name;
    this.sayHi = function(){
        print(this.name + "厉害了");
    };
}

//constructor:创建一个构造函数，专门用来创建Person对象
function Person(name1, age, gender){
    this.name1 = name1;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
        print(this.name);
    };
}

// var per1 = new Person('wzh','23','female');
// print(per1);

//JSON
//a json obj

var myJson = {
    name:'www',
    aaa:111,
    bbb:222,
};
 //json遍历的方法：for...in.
 for (var key in myJson){
     print(key);
     print(myJson[key]);
     print('------');
 }

