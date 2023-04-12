// for loop 

// for(index:condition;iteration)

for (var i=0;i<=1000;i++){
	console.log("hello"); // => 1001(hello)
}

//

for (var n =0; n <= 500; n++){
	if(n % 2 == 0){
		console.log(n);  // => 0,2,4,6,8,10,12,14,16 ... ,500 
	}
}

//

// show in html : 10 X 0 = 0 => 10 X 1 = 10 => 10 X 2 = 20 ...  
for(var mul = 0; mul <=30; mul++){
	var total = 10*mul;
	console.log("10 X "+mul+" = "+total);
	document.getElementById("res").innerHTML += ` 10 X ${mul} = ${total} </br>`;

	

}

// for loop with string 

var nm = "jalil";
// use '<' with 'length' => i=0 
for(var i =0;i<nm.length;i++){
	console.log(nm[i]);  // \n: j => a => l => i => l
}

// for ... in 
console.log("---------");
for(var i in nm){
	console.log(i); // \n: 0 => 1 => 2 => 3 => 4
}

console.log("---------");

for(var i in nm){
	console.log(nm[i]); // \n: j => a => l => i => l
}


// for ... of 
console.log("---------");

for(var i of nm){
	console.log(i); // \n: j => a => l => i => l 
}











