var counterparties = [1,2,3,4,7];
var arr1 = [1,2,3,4,7,5,9,6];
//solution 1:use sort();
function findCR(arr){
    let len = arr.length
    let crIndex = 1;
    arr.sort();
    while(len-crIndex > arr[crIndex-1]){
        crIndex++;
    }

    return crIndex;
}