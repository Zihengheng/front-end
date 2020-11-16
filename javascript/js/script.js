//基本数据类型

var a = 23;
var b = a;
a++;
console.log(a);
console.log(b);

//引用数据类型

var obj1 = new Object();
obj1.name = "Ziheng" ;

//obj2 = obj1

var obj2 = obj1 ;
obj1.name = "zzh";

console.log(obj1);
console.log(obj2);

//字符串

var a = "abcd";
var b = "" ;

console.log(typeof a);
console.log(typeof b);

// 获取字符串的长度

var str1 = "hello world" ;
var str2 = "hello, ziheng" ;

console.log(str1.length);
console.log(str2.length);

// es6 模版字符串
var name = "Ziheng";
var age = "23" ;
const c = 5;
const d = 10;

console.log(`我是${name}, age:${age}`);
console.log(`this is ${c+d}  and
	not ${2*c + d}`);





