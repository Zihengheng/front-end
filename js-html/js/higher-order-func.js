//print
function print(content){
	return console.log(content);
}

//higher order function:func as arguments
function func1(a, b, callback){
	print(a+b);
	callback && callback();
}

// func1(10, 20, function(){print(`I am the last invoked function`);});

//function as a return value
function func2(){
	let a = 20;

	return function(){
		print(a);
	};
}

const foo = func2();
foo();