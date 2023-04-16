// arrow function 

var y = ()=>{
    console.log("hello");
}

// y(); // => hello 

function test(callBack){
    callBack();
}

test(()=>{console.log("hi")};); // => hi
