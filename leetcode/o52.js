//一个长度为n-1的递增排序数组中的所有数字都是唯一的
//，并且每个数字都在范围0～n-1之内。
//在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//限制：
// 1 <= 数组长度 <= 10000
//printer
function print(content){
    console.log(content);
}
var num = [0,1,2,3,4,5,6,7,9];

var missingNum = function (nums){
    let pos = 0;
    for(let i =0; i<num.length; i++){
        if(num[i]==pos){
            pos++;
        }
        else{
            return pos;
        }
    }
}

print(missingNum(num));