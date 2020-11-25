function canmatch(str,exp){
    let arr1 = str.split("");
    let arr2 = exp.split("");
    let stack = [];
    let result = true;
    //is leagal
    if(arr2[0]=="*"){
        return console.log(`exp字符不合法`);
    }
    else{
        for (let i=arr2.length-1; i>=0;i--){
            if(arr2[i]=="."){
                arr1.pop();
            }
            else if(arr2[i]=="*"){
                continue;
            }
            else{
                let item = arr1.pop();
                if (item!==arr2[i]){
                    result = false;
                }
            }
        }
    }
    return result;
    
}



var str = "abc";
var exp = "ab*c";
var p = canmatch(str,exp);
console.log(p);