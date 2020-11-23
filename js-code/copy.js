//用 for in 实现浅拷贝（比较繁琐）
const obj1 = {
    name:'qqqqqq',
    age:28,
    info:{
        desc:'emmmmm',
    },
    color: ['red', 'blue', 'green'],
};

const obj2 = {};
//  用 for in 将 obj1 的值拷贝给 obj2
for (let key in obj1){
    obj2[key] = obj1[key];
}

// console.log(obj2);
// console.log('obj2:' + JSON.stringify(obj2));

obj1.info.desc = 'lalalla';
// 当修改 obj1 的第二层数据时，obj2的值也会被改变。所以  for in 是浅拷贝

// console.log('obj2:' + JSON.stringify(obj2));
const objA = {
    name: 'qianguyihao',
    age: 28,
    desc: 'hello world',
};

const objB = {
    name: '许嵩',
    sex: '男',
};
// 浅拷贝：把 objA 赋值给 objB。这一行，是关键代码。这行代码的返回值也是 objB
// Object.assign(objB, objA);
// console.log(JSON.stringify(objB));

//用 for in 递归实现深拷贝
function deepCopy(newObj, oldObj){
    
}