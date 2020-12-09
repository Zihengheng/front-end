
var data = {
  Student:[
    {id:1, name:"zhangsan"},
    {id:2, name:"lisi"},
    {id:3, name:"zhangsan"}
  ]
}

function findDuplicates(data){
    let students = [];
    let names = [];
    let duplicates = {};
    let arr = [];
    let temp = "";
    students = data.Student;
    //new an arr to store names
    for(let i=0;i<students.length;i++){
        names.push(students[i].name);
    }
    for(let j=0; j<names.length;j++){
        if(arr.length<1){
            arr.push(names[j]);
        }
        else{
            let temp = arr.pop();
            if(temp!== names[j]){
                arr.push(temp);
                arr.push(names[j]);
            }
            else{
                arr.push(temp)
                duplicates[names[j]]=[];
            }
        }
    }
    console.log(arr);
    return console.log(duplicates);
}
findDuplicates(data);
// var arr = [];
// arr = data.Student
// var duplicates= {};
// var arr1 = [];
// var arr2 = [];
// // console.log(arr[0].name);
// //put all name into an arr
// for(let i=0; i<arr.length;i++){
//     arr1.push(arr[i].name);
// }
// // console.log(arr1);
// //check duplicates for the name arr
// for(let i=1;i<arr1.length;i++){
//     if(arr2.length<1){
//         arr2.push(arr1[i]);
//     }
//     else{
//         //check duplicates
//         var temp = arr2.pop();
//         if(temp == arr1[i]){
//             arr2.push(arr1[i]);
//             duplicates[temp]= [];
//         }
//         else{
//             arr2.push(temp);
//             arr2.push(arr1[i]);
//         }
//     }
// }
// duplicates[arr[0]]= [];
// console.log(duplicates);