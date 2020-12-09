// 给定一个排序数组，你需要在 原地 
// 删除重复出现的元素，使得每个元素只出现一次，
// 返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 
// 并在使用 O(1) 额外空间的条件下完成。

let test1 = [1,1,2];
let test2 = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function(nums){
    let posl= 0;
    let posh = 1;
    while(posh<nums.length){
        if(nums[posl]!==nums[posh]){
            posl++;
            nums[posl]=nums[posh];
        } 
        posh++;
    }
    return nums.slice(0,posl+1);
};
console.log(removeDuplicates(test2));