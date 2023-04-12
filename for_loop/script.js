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


for(var mul = 0; mul <=30; mul++){
	var total = 10*mul;
	console.log("10 X "+mul+" = "+total);
	document.getElementById("res").innerHTML += ` 10 X ${mul} = ${total} </br>`;

	

}




