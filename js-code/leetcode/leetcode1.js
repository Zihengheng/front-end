// 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。
// 但是，你不能重复利用这个数组中同样的元素。
//printer
function print(content){
    console.log(content);
}
var nums = [2, 7, 11, 15];
var target = 26;

function twoSum(nums,target){
     let len = nums.length;
     let n = {};
     for (let i=0;i<len;i++){
         if(n[target-nums[i]]!==undefined){
             return [n[target-nums[i]],i];
         }
         n[nums[i]]=i;
         console.log(n);
     }
}

var a = twoSum(nums,target);
console.log(a);