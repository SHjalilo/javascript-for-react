// casting in javascipt 

// to number 
var x = "10";
var y = "20";

console.log(x+y); // => 1020

console.log(Number(x)+Number(y)); // => 30

console.log(typeof x); // => string

x = Number(x);
console.log(typeof x); // => Number


// to string 

var a = 15 ;
var b = 25 ;

console.log(String(a) + b); // => 1525

console.log(b.toString() + a); // => 2515

// boolean 

console.log(Boolean(a)); // => true

var c = "hello";

console.log(Boolean(c)); // => true
