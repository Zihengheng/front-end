var test = [1,[2,[3,4]]];

function flatten(arr){
    let len = arr.length;
    let result = [];
    for(let i=0;i<len;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}

//toString
function flatten2(arr){
    let str = arr.toString();
    let newArr = str.split(",");
    newArr.map((item)=>{return +item;});
    return newArr;
}

//reduce
