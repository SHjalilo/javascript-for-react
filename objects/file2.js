// pass by reference VS pass by value 

//value
let x = "hi";
let y = x;
x = "test";

console.log(x); // => test
console.log(y); // => hi 

// ref
let a = {
    name:"khaled"
}

let b = a;

a.name="salama";

console.log("a value is : ",a); // => a value is : salama
console.log("b value is : ",b); // => b value is : salama 

var w = ["hello"];
var z = w;
w.push("hi");
console.log("the w value is : ",w); // =>  [ 'hello', 'hi' ]
console.log("the z value is : ",z); // =>  [ 'hello', 'hi' ]
