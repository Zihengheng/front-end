//Promise 处理异步任务

const { set } = require("vue/types/umd");

// model 
const promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        var data = {retcode:0, msg:'2333'};
        // 接口返回的数据
        if(data.retcode==0){
            // 接口请求成功时调用
            resolve(data);
        }else{
            // 接口请求失败时调用
            reject({ retCode: -1, msg: 'network error' });
        }
    },100);
});

// 第二步：业务层的接口调用。
//这里的 data 就是 从 resolve 和 reject 传过来的，
//也就是从接口拿到的数据
promise
    .then((data)=>{
        // 从 resolve 获取正常结果
        console.log(data);
    })
    .catch((data)=>{
        // 从 reject 获取异常结果
        console.log(data);
    });