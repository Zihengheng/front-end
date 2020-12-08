//n! 实现阶乘
function factorial (num){
    if(num ==1) return 1;
    else{
        return num*factorial(num-1);
    }
}

// console.log(factorial(4));
//写一个递归函数来计算斐波那契数列。
function peibo(b){
    if (b==1||b==2) {return 1;}
    else{
       return peibo(b-1)+peibo(b-2);      
    }
}
let a = peibo(5);
console.log(a);