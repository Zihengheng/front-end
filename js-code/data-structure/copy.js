//浅拷贝    
let arr = [1,2,3,4,5];
let arr2 = arr;
// console.log(arr2);
arr[0]=6;
// console.log(arr2);
//数组的深拷贝
//for
function forCopy(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
//slice
let arr3 = arr.slice(0);
//concat
let arr4 = arr.concat();
//es6
let arr5 = [5,6,7,8];
let [...arr6]=arr5;
//对象的深拷贝
//object.assign 只能实现一维对象的深拷贝
var obj1 = {x:1,y:2};
obj2 = Object.assign({},obj1);
//用 for in 递归实现深拷贝
function deepCopy(newObj,oldObj){
    for(let key in oldObj){
        let item = oldObj[key];
        //console.log(item)
        if(item instanceof Array){
            newObj[key]=[];
            deepCopy(newObj[key], item);
        }
        else if(item instanceof Object){
            newObj[key]={};
            deepCopy(newObj[key],item);
        }
        else{
            newObj[key]=item;
        }
    }
}