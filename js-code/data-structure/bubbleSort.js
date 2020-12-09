function bubbleSort(arr){
    let temp = null;
    let pos = 0;
    if(!arr||arr.length<=2){
        return;
    }
    for(pos=0;pos<arr.length-1;pos++){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
    }
    return arr;   
}
var test = [3,4,1,2];
console.log(bubbleSort(test));