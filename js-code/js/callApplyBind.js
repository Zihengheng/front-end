////printer
function print(content){
    return console.log(content);
}
const obj1 = {
    nickName:'qianguyihao',
    age:28,
};
function fn1(){
    print(this);
    print(this.nickName);
}
// fn1.call(this);

function fn2(a,b){
    print(this);
    print(this.nickName);
    print(a+b);
}
// fn2.call(obj1,1,2);
//inherit with call
function Father(myName, myAge){
    this.name = myName;
    this.age = myAge;
}

function Son(myName, myAge){
    Father.call(this, myName, myAge);
}

const son1 = new Son('aaa',23);
print(JSON.stringify(son1));