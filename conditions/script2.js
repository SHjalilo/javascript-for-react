//

document.getElementById("btn").addEventListener("click", function(){
	var input1 = document.getElementById("m").value;
	var input2 = document.getElementById("v").value;
	console.log(input1,input2);
	input1 = Number(input1);
	input2 = Number(input2);
	var total = input1 / (input2*input2);
	document.getElementById("res").innerHTML = `Result is : ${total}`;
});
