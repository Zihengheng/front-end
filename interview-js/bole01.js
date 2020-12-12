let test = [-41, 7, 20, -46, 38];
function second( arr ) {
    // write code here
    let result = null;
    let minIndex = 0;
    let temp = null;
    //selection sort
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]-arr[j]>0){
                minIndex = j;
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    result = arr[1];
    return result;
}

console.log(second(test));