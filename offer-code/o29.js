//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//  
// 限制：
// 0 <= matrix.length <= 100
// 0 <= matrix[i].length <= 100
// 来源：力扣（LeetCode）
// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
//my printer
function print(content){
    return console.log(content);
}
//双指针
//example check
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
// var matrix = [];
var spiralOrder = function (matrix){
    var line = matrix.length
    var arr = [];
    var row = 0;
    var col = 0;
    var i = 0; //x
    var j = 0;  //y
    //先模拟外圈
    if (line>1){

    }
    else{
        arr = matrix;
    }
    return arr;
}

print(spiralOrder(matrix));