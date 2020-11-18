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
    var str1 = str.toLowerCase();
    var newStr = "";
    //test add str
    for (var i=0;i<=str1.length;i++){
        if(str1[i]!=="-"&&str1[1]!=="_"){
            newStr+=str1[i];
        }
        else{
            continue;
            str1[i+1].toUpperCase();
        }
    }
    console.log(newStr);
}
//test
stringTrans("tesESDFSD_Fstte-Rtest-egsge-ese_hsi_ue_h");