// arrays 

var students = ["med","salama","brahim","hamza","josef"];

console.log(typeof students); // => object 

document.getElementById("students").innerHTML = students;

console.log(students[0]); // => med 
console.log(students[3]); // => hamza
console.log(students[4]); // => josef

// add student 
students.push("rim");
console.log(students); // =>["med","salama","brahim","hamza","josef","rim"] 

// replace 
students[1] = "Ammar";
console.log(students); // =>["med","Ammar","brahim","hamza","josef","rim"] 

// delete with pop() 
students.pop();
console.log(students); // =>["med","Ammar","brahim","hamza","josef"] 

// delete - splice(index,howManyItemDelete,replacedItem)

students.splice(0,1);
console.log(students); // =>["Ammar","brahim","hamza","josef"] 

students.splice(1,2);
console.log(students); // =>["Ammar","josef"] 

students.splice(1,1,"dahha");
console.log(students); // =>["Ammar","dahha"] 

// 0 => put value without delete

students.splice(0,0,"jalil");
console.log(students); // =>["jalil","Ammar","dahha"] 


students.splice(1,0,"abdo");
console.log(students); // =>["jalil","abdo","Ammar","dahha"] 

//

var arr = [12,100,50,76,8];

console.log(Array.isArray(arr)); // => true 

//

console.log(arr.includes(76)); // => true
console.log(arr.includes(90)); // => false

//

console.log(arr.indexOf(50)); // => index : 2
console.log(arr.indexOf(138)); // => index : -1 ! index not found ?

// shift 

//console.log(arr.shift()); // => 12

console.log(arr); // => [12,100,50,76,8]
arr.shift();
console.log(arr); // => [100,50,76,8]

// unshift 

console.log(arr); // => [100,50,76,8]
arr.unshift(432);
console.log(arr); // => [432,100,50,76,8]

// reverse 

console.log(arr); // => [432,100,50,76,8]
arr.reverse();
console.log(arr); // => [8,76,50,100,432]

// challenge 

var btnAdd = document.getElementById("btn-a");
	var std = ["Med","Josef"];
	document.getElementById("res").innerHTML = `${std}`;
btnAdd.addEventListener("click",myFunction);
// function add item to array 
function myFunction(){
	var data = document.getElementById("st").value;
	std.push(data);
	document.getElementById("res").innerHTML = `${std}`;
	console.log(std);
}

var btnDel = document.getElementById("btn-d");

btnDel.addEventListener("click",delFunction);
// function delete item from array
function delFunction(){
	std.pop();
	document.getElementById("res").innerHTML = `${std}`;
}













