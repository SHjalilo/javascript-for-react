// true or false

var x = true ;
var y = "true"; 

console.log(typeof x); // => boolean
console.log(typeof y); // => string

// explain with Math function isNan :

var test = "test";
var val = isNaN(test);
console.log(typeof val); // => boolean  

// 
var n1 = 10;
var n2 = 20;
console.log(n1 > n2); // => false
console.log(n1 < n2); // => true

console.log(n1 = n2); // => 20 

console.log(n1 == n2); // => false 

//
console.log(n1 == true); // => false

// all numbers in boolean is true ... but 0 it's false ?
console.log(Boolean(n1)); // => true
console.log(Boolean(-7)); // => true
console.log(Boolean(0)); // => false

// NaN like 0 
var n3 = NaN ;
console.log(Boolean(n3)); // => false





