/**
 * @description
 * 将一个一维数组切分成二维数组，按照第二个参数（数字）的值，来决定二维数组长度
 * @example
 * const originArr = ['a', 'b', 'c', 'd']
 * const result = chunk(originArr, 3);
 * console.log(result) => [['a','b', 'c'], ['b']];
 * const result = chunk(originArr, 2);
 * console.log(result) => [['a','b'], ['c','b']];
 * const result = chunk(originArr, 1);
 * console.log(result) => [['a‘],['b‘],['c‘],['d']];
 *
 * 你需要实现这个 chunk 方法。
 */
//print
function print(a){
    return console.log(a);
}
//chunk
function chunk(arr,len){
    //if len=1,if len=2?, if len=3?
    var newArr=[];
    var j=0;
    for (var i=0; i<=parseInt(arr.length/len); i+=len){
        newArr.push(arr.slice(i, i+len));
        // arr.splice(i, i+len);
    }
    if (arr.length%len){
        newArr.push(arr.slice(arr.length-arr.length%len,arr.length));
    }
    print(newArr);
    print(arr)
}
var arr = ['a', 'b','c','d','e'];
chunk(arr,2);