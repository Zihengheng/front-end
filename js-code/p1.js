// toString method
var a = 255;
a = a.toString();

console.log(a);
console.log(typeof a);

//String method
 var b = null;
 String(b);
 console.log(b);
 
 //Number 函数
var c = 233;
var d = false;
var e = "abcd";

// function toNumber(i){
//     Number(i);
//     console.log(`转换成数字为：${i}`);
// }
// toNumber(c);
// toNumber(d);
// toNumber(e);

console.log(Number(e));

//逻辑运算符
const a1 = "wangzihenghaha"
a1 && console.log('看a1看不出来');

const a2 = undefined;
a2 && console.log("看a2看不出来");

//练习1
BMI (53, 153);
function BMI (weight, height){
    var BMI = weight/Math.pow(height, 2);
    if (BMI>32) {
        console.log("非常肥胖");
    }
    else if (BMI>=28){
        console.log("肥胖");
    }
    else if (BMI>=25){
        console.log("过重");
    }
    else if (BMI>=18.5){
        console.log("正常");
    }
    else {
        console.log("过轻");
    }
}
//loop while practice
// 假如投资的年利率为5%，试求从1000块增长到5000块，需要花费多少年
function Func1(){
    var rate = 0.05;
    var money = 1000;
    var year = 0;
    
    while(money<=5000){
        year ++;
        money *= (1+0.05);
    }
    console.log(`It needs: ${year} years`); 
}
Func1();
//practice 2
//在页面中接收一个用户输入的数字，并判断该数是否是质数。
function if_zhishu (num){
    if (num<=1){
        console.log("unexpected number!")
    }
    else{
        var result = true;
        for (var i=2; i<num; i++){
            if (num%i==0){
                result = false;
                break;
            }
        }
    }
    if (result){
        console.log("是质数");
        }
        else{
            console.log("不是质数")
        } 
}

if_zhishu(8);

//practice 3
// 打印出1-100之间所有的质数