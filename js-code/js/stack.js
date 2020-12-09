//js 实现栈
//print
function print(content){
    return console.log(content);
}
//stack
// var a = new Array();
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// print(a);
// a.pop();
// print(a);
//（）matching
pmatching("()[]{}");
function pmatching(str){
    var arr = str.split("");
    var stack = [];
    var checkStr = "([{}])";
    var index = -1;
    var result = true;
    //循环遍历数组
    for (var i=0;i< arr.length;i++){
        if ((index=checkStr.indexOf(arr[i]))<3){
            stack.push(arr[i]);
        }
        else{//匹配栈顶元素
            var target = stack.pop();
            if (!target||target!==checkStr[5-index]){
                result = false;
            }
        }
    }
    //循环匹配完之后检查栈里是否还有留下的元素
    if (stack.length){
        result = false;
    }
    print(result);
}