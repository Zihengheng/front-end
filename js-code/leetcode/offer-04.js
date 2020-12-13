// 在一个 n * m 的二维数组中，
// 每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
function findNum(matrix,target){
    let row = matrix.length;
    let col = matrix[0].length;
    let max = matrix[row-1][col-1];
    let min = matrix[0][0];
    let posX = row-1;
    let posY = col-1;   
    if(target > max){ return flase;}
    else if(target < min) {return false;}
    function searchRow(num){
        let flag = false;
        for(let i=0;i<col;i++){
            let item = matrix[num][i];
            if(item == target){
                flag = true;
            }
        }
        return flag;
    }
    while(posX>=0){
        let flag = searchRow(posX);
        if(flag==true){
            return true;
        }
        posX--;
    }
    return false;
}

let a = findNum(matrix,20);
console.log(a);