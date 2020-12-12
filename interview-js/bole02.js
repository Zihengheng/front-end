function sixToThree( sixString ) {
    // write code here
    let a = Number(sixString);
    let b = a.toString(3);
    return b;
    
}

let test = "0xA";
console.log(sixToThree(test));