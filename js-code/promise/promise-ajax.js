//Promise 封装ajax请求
const request = require('request');
// Promise 封装接口
function request1 (){
    return new Promise((resolve,reject)=>{
        request('https://www.baidu.com', function(response){
            if(response.retcode==200){
                 // 这里的 response 是接口1的返回结果
                 resolve('request1 success' + response);
            }else{
                 reject('接口请求失败');
            }
        });
    });
}

request1().then((res1)=>
    // 接口1请求成功后，打印接口1的返回结果
    {console,log(res1);
    return request2();
});