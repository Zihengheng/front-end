//print
function print(content){
    return console.log(content);
}

//翻转数组
function rotateArr(){
    var arr = [10,20,30,40,50];
    var newArr = [];
    for (var i=0; i<arr.length;i++){
        newArr[i]= arr[arr.length-i-1];
    }
    print(arr.length);
    print(newArr);
}
// rotateArr();
//冒泡排序
function bubbleSort(){
    var arr = [10,1,35,61,89,36,55];
    for (var i = 0; i<arr.length-1; i++){
        for (var j=0; j<arr.length-i-1; j++){
            if (arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    print(arr);
}
bubbleSort();