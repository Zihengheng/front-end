function slelectionSort(arr){
    let len=arr.length;
    let minIndex = null;
    let temp = null;
    for(let i=0;i<len-1;i++){
        minIndex = i;
        for (let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]= temp;
    }
    return arr;
}