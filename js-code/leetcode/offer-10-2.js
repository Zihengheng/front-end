// 一只青蛙一次可以跳上 1 级台阶，
// 也可以跳上 2 级台阶。求该青蛙跳上一个 n  
// 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），
// 如计算初始结果为：1000000008，请返回 1。
function foggJump(n){
    if(n==0||n==1) return 1;
    return  foggJump(n-1)+foggJump(n-2);
}

let a = foggJump(4);
console.log(a);