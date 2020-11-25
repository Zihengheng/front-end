//给定⼀个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

//my printer
function print(content){
    return console.log(content);
}

var str1 = "()[]";
var str2 = "()[";
var str3 = "()[]{";
function braMatching(str){
    let arr = str.split("");
    let stack = [];
    let result = true;
    let checkStr = "([{}])"
    let index = -1;
    for(let i=0;i<arr.length;i++){
        index = checkStr.indexOf(arr[i]);
        if(index<3){
            stack.push(arr[i]);
        }
        else if (index>3){
            if(stack.length==0||stack.pop()!== checkStr[5-index]){
                result = false;
            }
        }
    }
    if(stack.length){
        result = false;
    }
    print(result);
}

braMatching(str1);