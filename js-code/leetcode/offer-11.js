function findMin(arr){
    let pos = 0;
    let index = null;
    while(arr[pos+1]>=arr[pos]){
        pos++;
    }
    index = pos+1;
    return arr[index];
}

arr1 = [3,4,5,1,2];
arr2 = [2,2,2,0,1];
let test = findMin(arr2);
console.log(test);