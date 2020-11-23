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
var target = 9;

function sunOfNum(nums, target){
    var arr = nums;
    var hashTable = {};
    function multiply(multiplier){
        let result = 0;
        for(let i=0; i<arr.length; i++){
            if(multiplier == arr[i]){
                continue;
            }
            else{
                result = multiplier+arr[i];
                hashTable[result]= [multiplier, arr[i]]
            }
        }
    }
    for(let j= 0; j<nums.length; j++){
        multiply(nums[j]);
    }
    //search
    let theNum = hashTable[target];
    print(theNum);
}

sunOfNum(nums, target);