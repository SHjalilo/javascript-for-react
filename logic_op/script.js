// OR - AND - NOT

// AND :
var x = 4;
console.log(x > 2); // => true
console.log(x > 5 && x < 15); // => false
var y = 7 ;
console.log(x > 5 && x < 12); // => true 

// OR :
console.log(x < 1 || x > 6); // => false 
console.log(x < 1 || x > 6 || y == 7); // => true 

// NOT :
var z = x < 1 || x > 6 || y == 7 ;
console.log(z); // => true 
console.log(!z); // => false
//
var w = x < 1 || x > 6 || y != 7 ;
console.log(w); // => false
console.log(!w); // => true
