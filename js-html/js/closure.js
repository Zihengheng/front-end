function func1(){
	let a = 10; 

	function func2(){
		console.log(a);
	}
	func2();
}

// func1();

//闭包的作用：延伸变量的作用范围
function func2(){
	let a = 20;

	return function(){
		console.log(a);
	};
}

const foo = func2();
//// 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();