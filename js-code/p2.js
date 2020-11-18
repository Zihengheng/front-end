// function stringTrans(str){
//     var str1 = str.toLowerCase();
//     //遍历字符串
//     for (var i =0; i<=str1.length;i++){
//         //判断是否为特殊字符
//         for (j=0;j<=str1.length;j++)
//         if (str1[i]!=="-"&&str1[i]!=="_"){
//             //不是特殊字符的先push进newStr
//             var newStr = "";
//             newStr.push= str[i];   
//         }
//         else{
//             //大写下一个字符
//             str[i+1]=str[i+1].toUpperCase();
//             continue;    
//         }
//     }
//     console.log(newStr);
// }
// //test
// stringTrans("tesESDFSDFstte-Rtest-egsge-ese_hsiueh");

function stringTrans(str){
    //[] METHOD
    var str1 = str.toLowerCase();
    var arr1 = str1.split("");
    var newArr = [];
    for (var i=0; i<=arr1.length; i++){
        if(arr1[i]== "-"|| arr1[i]== "_"){
            arr1[i+1].toUpperCase();
            continue;
        }
        else{
            newArr = newArr.concat(arr1[i]);
        }
    }
    var newStr = newArr.join();
    console.log(newStr);
}
//test
stringTrans("tesESDFSD_Fstte-Rtest-egsge-ese_hsi_ue_h");