//非递归
var testArr = [1,2,3,4,5,6,7,8,9];
function binarySearch(arr,target){
    let low = 0;
    let high = arr.length-1;
    let pos = null;
    while(low<=high){
        pos = Math.floor((high+low)/2);
        if(target==arr[pos]){
            return pos;
        }else if(target<arr[pos]){
            high = pos-1;
        }else if(target>arr[pos]){
            low = pos+1;
        }else{
            return -1;
        }
    }
}

function binarySearchRecursion(arr,target,low,high){
    if(low>=high){
        return -1;
    }
    let pos = Math.floor((low+high)/2);
    if(arr[pos]==target){
        return pos;
    }else if(arr[pos]<target){
        low = pos+1;
        return binarySearchRecursion(arr,target,low,hight); 
    }else if(arr[pos]>target){
        high = pos-1;
        return binarySearchRecursion(arr,target,low,high);
    }
}
// var a = binarySearch(testArr,4);
// console.log(a);