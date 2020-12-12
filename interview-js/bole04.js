function maximumValue( arr ) {
    // write code here
    let res1=[];
    let res2 =[];
    let sum1 = null;
    let sum2 = null;
    let i=0;
    let j=1;
    let len = arr.length;
    let reuslt = null;
    if(len==1){
        return arr[0];
    }
    else if(len<=0){
        return -1;
    }
    else{
        for(let i=0;i<len;i+=2){
            res1.push(arr[i]);
        }
        for(let j=1;j<len;j+=2){
            res2.push(arr[j])
        }
    }
    let sum = (res)=>{
        let tsum = 0;
        for(let q=0;q<res.length;q++){
            tsum = tsum + res[q];
        }
        return tsum;
    }
    sum1 = sum(res1);
    sum2 = sum(res2);
    reuslt = (sum1>sum2)?sum1:sum2;
    return reuslt;
}
let test = [1, 1, 3, 1,5];
let test1 = [5];
console.log(maximumValue(test));