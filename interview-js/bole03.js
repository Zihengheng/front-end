let test1 =[[0,0,0,0,0]];
let test2 = [[1,0,0,0,0], [1,1,0,0,1], [1,0,1,1,0], 
[1,1,0,0,1], [0,0,0,0,0]];

function maxAreaOfIsland( grid ) {
    // write code here
    let len = grid.length;
    let row = grid[0].length;
    let checkOne = grid[0].includes(1);
    let result = null;
    function indexOne(arr){
        let res = [];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==1){
                res.push(i);
            }
        }
        return res;
    }
    if(checkOne == false){
        return 0;
    }
    if(len==1){
        let indexArr = indexOne(grid[0]);
    }
    else if(len<=0){
        return 0;
    }
    else{

    }
    return result;
}

console.log(maxAreaOfIsland(test1));

