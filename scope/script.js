// scope 

// var not block scope
for(var i = 0; i<6 ; i++){
    var x = 20;
    var y_for = 10;
}
// function scope
function test(){
    var y_test = 10;
}

console.log(y_for); // 10
console.log(y_test); // undefind

// global scope
var v = 0;

// local scope 
// 2 type of local scope : (block scope / function scope)
