//test
var arr1 = [123,'hello','world',"123",123,"123","hello"];
var arr2 = [123,[1,2,3],[1,'2',3],[1,2,3],'hello',{name:'hehe'}];
// var test = new Set(arr2);
// console.log(test);
// for (value of test){
//     console.log(typeof(value));  
// }
function unique(arr){
    let uniqueArr = [];
    let a = new Set(arr);
    let arrStack = [];
    let objStack = [];

    for (value of a){
        if(value instanceof Array){
            arrStack.push(value);
            checkArr(arrStack);
        }
        else if(typeof(value == Number)){
            uniqueArr.push(value);
        }
        else if (typeof(value==string)){
            uniqueArr.push(value);
        }
        else if (arr[i] instanceof Object){
            objStack.push(objStack);
            checkObj();
        }
    }
    //check array
    function checkArr(stack){
        if(stack.length=1){
            uniqueArr.push(stack[0]);
        }
        else{
            for(let i=0; i<stack.length;i++){
                for(let j=i+1; j<stack.length;j++){
                    item1 = stack[i].pop();
                    item2 = stack[j].pop();
                    if(item1 === item2){
                        continue;
                    }
                    else{
                        stack.pop(stack[i]);
                    }
                }
            }
        }
    }
    //check object
    function checkObj(stack){
        if(stack.length=1){
            uniqueArr.push(stack[0]);
        }
        else{

        }
    }
    return console.log(uniqueArr);
}
unique(arr1);