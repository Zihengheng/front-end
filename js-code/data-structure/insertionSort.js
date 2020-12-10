let insertionSort = arr =>{
    let len = arr.length;
    if(len<=1) return arr;

    let pre = null;
    let curr = null;
    for(let i=1;i<len;i++){
        pre = i-1;
        curr = arr[i];
        while(pre>=0 && arr[pre]>curr){
            arr[pre+1]=arr[pre];
            pre--;
        }
        if(pre+1!== i){
            arr[pre+1]=curr;
            console.log('array:', arr);
        }
    }
    return console.log(arr);
}

let test = [5,4,3,2,1];
insertionSort(test);