// anonymous function 

function test(){
	console.log("hello");
}

var x = test;
x(); // => hello

//

var y = function(){
	console.log("hi from y");
}

y(); // => hi from y 

console.log(y.name); // => y
console.log(x.name); // => test

function callAnotherFunction(functionToCall){
    console.log("getting ready to call another function ");
    functionToCall();
}

callAnotherFunction(y); 

// 

callAnotherFunction(function(){
    console.log("hello ");
});

// callback function / handler 

setTimeout(function(){
    console.log("hello world "); // after 3s => hello world
} , 3000);

//

setInterval(function(){
    console.log("SALMO ALYKOUM "); // after every 5s => SALMO ALYKOUM => SALMO ALYKOUM ... 
} , 5000);

var testArr = [20,30,50,40];

testArr.forEach(function(element){
    console.log(element * 5); // 100 => 150 => 250 => 200
}


