//获取索引
function indexExp (str1){
    console.log(str1.indexOf('c'));
    console.log(str1.indexOf('h'));
    console.log(str1.indexOf('Wang'));
    //指定查找的起始位置
    console.log(str1.indexOf('h',4));
}
// indexExp("WoshiWangZihenghhh");

//查找字符串"qianguyihao"中，所有 a 出现的位置以及次数。
function searchA (){
    let str="qianguyihao";
    var index = str.indexOf('a');
    var num = 0;
    while(index !== -1){
        console.log(index);
        num++;
        index =str.indexOf('a',index+1);
    }
    console.log(`a 出现的次数是：${num}`);
}
// searchA();
//练习 1："smyhvaevaesmyh"查找字符串中所有 m 出现的位置。
function practice1(){
    var str = "smyhvaevaesmyh";
    var index = str.indexOf("m");
    while(index!== -1){
        console.log(index);
        index = str.indexOf("m",index+1);
    }
}
// practice1();
//练习 2：判断一个字符串中出现次数最多的字符，统计这个次数
function practice2(){
    var str = "smyhvaevaesmyhvae";
    arr = str.split("");
    //数组去重
    arr.sort();
    var newArr= [];
    for (var i=0; i<= arr.length; i++){
        if (arr[i]==arr[i+1]){
            continue;
        }
        else{
            newArr = newArr.concat(arr[i]);
        }
    }
    //遍历数组字符返回index，统计次数
    var index = [];
    var sum = [];
    for(var j=0; j<newArr.length; j++){
        index.push(str.indexOf(newArr[j]));
        sum.push(0);
        while(index[j]!== -1){
            sum[j]+=1;
            index[j] = str.indexOf(newArr[j], index[j]+1);
        }
    }
    //求出sum中最大值的索引
    var arr1 = sum;
    sum.sort();
    letter = arr1.indexOf(sum[-1]);
    console.log(sum);
    console.log(arr1);
    console.log(newArr);
}
practice2();