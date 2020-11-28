var num1 = 18

function isPrimeCheck( num ) {
    // write code here
    let result = true;
    let label = 0;
    //check is leagal 
    if(num<=1){
        console.log(`The number is illeagle, pls choose an int>1`);
    }
    else{
        for(let i=2;i<num;i++){
            lable = num%i;
            if(lable==0){
                result = false;
            }
        }
    }
    return console.log(result);
}

isPrimeCheck(num1);