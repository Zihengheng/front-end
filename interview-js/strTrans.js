unction stringTrans(str){
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