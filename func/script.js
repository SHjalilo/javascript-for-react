// functions 

function printWelcomMessage(){
console.log("hello ahmed");
}

// function call  
printWelcomMessage(); // => hello ahmed

// function with parameters 

function printWelcomMessage2(name){
console.log("hello "+name);
}

// function call  
printWelcomMessage2("jalilo"); // => hello jalilo


function squared(num){
console.log(num*num);
}

// function call  
squared(4); // => 16 


// function with Multiple parameters 

function mul(num1,num2){
console.log(num1*num2);
}

// function call  
mul(4,9); // => 36

//

function mul2(num1=10,num2=20){
console.log(num1*num2);
}

// function call  
mul2(4); // => 80

//

function mul3(num1=10,num2=20){
console.log(num1*num2);
}

// function call  
mul3(); // => 200

// Returns :

function mul4(num1=10,num2=20){
    var result = num1*num2;
    return result;
}

// function call  
console.log(mul4()); // => 200

console.log("the result is : "+mul4()); // => the result is : 200

console.log("the number is : "+mul4()); // => the number is : 200

console.log("-------------");

// challenge reverse array without using reverse() function 

var arra = [9,1,5,7,10,'hello',true];
function rev(test){
var arr = test;
var newArr = [];
for(var i =arr.length-1;i>=0;i--){
    //console.log(i + "i");
    //console.log(arr);
    //console.log(arr[i]);
    newArr.push(arr[i]);
}
return newArr;
}
//
var uList = ["dahha",67,"brahim","ferrik",44];

console.log(uList);  //  [ "dahha", 67, "brahim", "ferrik", 44 ] 

console.log(rev(uList)); //  [ 44, "ferrik", "brahim", 67, "dahha" ]

// method 2 :

function rev2(test=[4,5,6,7]){
    var outputArray =[];
    for(elem of test){
    outputArray.unshift(elem);
    }
    return outputArray;
}

// call 

console.log(rev2()); // [ 7, 6, 5, 4 ] 

console.log(rev2(arra)); // [ true, "hello", 10, 7, 5, 1, 9 ]
