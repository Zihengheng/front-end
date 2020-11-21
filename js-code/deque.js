//print
function print(content){
    console.log(content);
}

//回文词
function checker(str){
    let arr = str.split("");
    // print(arr);
    let deque = [];
    let result = true;
    let front = "";
    let rear = "";
    //input deque
    for (var i=arr.length-1; i>=0; i--){
        deque.push(arr[i]);
    }
    // print(deque); 
    //check 
    while (deque.length>0){
        front = arr.shift();
        rear = deque.shift();
        if(front!==rear){
            result = false;
            break;
        }
    }
    return result;
}

var a = "radare";
print(checker(a));