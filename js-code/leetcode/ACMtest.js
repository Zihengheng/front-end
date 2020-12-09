
//输入包括两个正整数a,b(1 <= a, b <= 10^9),
//输入数据有多组, 如果输入为0 0则结束输入
var line;
while(line=readline()){
    let params = line.split(' ');
    let a = Number(params[0]);
    let b = Number(params[1]);
    if(a){
        console.log(a+b);
    }
}

while(str = readline()){
    var arr = str.split(' ');
    if (str === '0 0') break;
    var result = arr[0] * 1 + arr[1] * 1;
    console.log(result);
}

var line;
while(line=readline()){
    var aa = line.split(' ');
    var a=Number(aa[0]);
    var b=Number(aa[1]);
    if (a){
        console.log(a + b)
    }
}

while(line = readline()){
    let arr = line.split(" ");
    let len = arr[0];
    let sum = 0;
    if(len==0) break;
    //  求和
    for(let i=1;i<=len;i++){
        sum = sum + parseInt(arr[i]);
    }
    console.log(sum);  
}