const obj1 = {
	nickName:"wzh", 
	age: 23,
};

//print
function print(content){
	return console.log(content);
}

function fun(a, b){
	print(this);
	print(this.nickName);
	print(a + b);
}

//not change this
// fun(this);

//call
// fun.call(obj1, 1, 2);

//通过 call() 实现继承

function Father(myName, myAge){
	this.name = myName;
	this.age = myAge;
}

function Son(myName, myAge){
	// 【下面这一行，重要代码】
    // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，
    //给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
	Father.call(this, myName, myAge);
	// print(this);
}
// const son1 = new Son('ziheng','23');
// print(son1);

//apply()
function fn1(a){
	print(this);
	print(this.nickName);
	print(a);
}
//invoke
// fn1.apply(obj1, ['hello']);

//apply() 方法的巧妙应用：求数组的最大值
const arr1 = [3, 7, 10 ,8];

const maxValue = Math.max.apply(Math, arr1);
print(maxValue);

const minValue = Math.min.apply(Math, arr1);
print(minValue);
