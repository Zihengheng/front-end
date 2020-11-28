var arrA = [1,2,3];
var arrB = [3,1,2];
function isIdenticalSet( arr1 ,  arr2 ) {
    // write code here
    let test1 = new Set(arr1);
    let test2 = new Set(arr2);
    //take value from tests
    let test11 = [...test1];
    let test22 = [...test2];
    //to compare arrs
    let temp11 = 0;
    let temp22 = 0;
    let result = true;
    //compare test11&22
    test11.sort();
    test22.sort();
    for(let i=0; i<test11.length; i++){
        temp11 = test11.pop();
        temp22 = test22.pop();
        if(temp11!== temp22){
            result = false;
        }
    }
    return console.log(result);
}

isIdenticalSet(arrA, arrB);