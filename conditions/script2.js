//

document.getElementById("btn").addEventListener("click", function(){
	var input1 = document.getElementById("m").value;
	var input2 = document.getElementById("v").value;
	// => for testing : console.log(input1,input2);
	input1 = Number(input1);
	input2 = Number(input2);
	var total = input1 / (input2*input2);
	// toPrecision to return number with specified length .
	document.getElementById("res").innerHTML = `Result is : ${total.toPrecision(4)}`;
	 switch(true){
	       case(total < 18):
	          document.getElementById("val").innerHTML = `You have : Na7afa`;
	          break;
	       case(total >= 18 && total < 24.9):
	          document.getElementById("val").innerHTML = `You have : Wazn Mithali`;
	          break;
	       case(total >= 25 && total < 29.9):
	          document.getElementById("val").innerHTML = `You have : Wazn Zayed`;
	          break;
	       case(total >= 30 && total < 34.9):
	          document.getElementById("val").innerHTML = `You have : Semna 1`;
	          break;
	       case(total >= 35 && total < 39.9):
	       	  document.getElementById("val").innerHTML = `You have : Semna 2`;
	          break;
	       default:
	          document.getElementById("val").innerHTML = `You have : Semna Khatira`;
	 }
});
