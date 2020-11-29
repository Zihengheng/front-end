const { set } = require("vue/types/umd");

var data = {
  Student:[
    {"id":"1","name":"zhangsan"},
    {"id":"2", "name":"lisi"},
    {"id":"3", "name":"zhangsan"}
  ]
}
var arr = [];
arr = data.Student
var duplicates= {};
var arr1 = []
for(let i=0; i<arr.length;i++){
    if(arr1.length>0){
        let temp = arr1.pop();
        if(arr[i]==temp){
            arr1.push(arr[i]);
            duplicates[arr[i]]=[];
        }
        else{
            arr1.push(temp);
            arr1.push(arr[i]);
        }
    }
}
console.log(duplicates);