const mergeSort = arr =>{
    let len = arr.length;
    if(len<2) return arr;
    // length >> 1 和 Math.floor(len / 2) 等价
    let middle = Math.floor(len/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
};

const merge = (left,right) =>{
    let result = [];

    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}