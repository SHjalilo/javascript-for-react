// 

let x = 10;
let y = 0;
console.log(x/y); // => Infinity

function div(num1,num2){
    if(num2 == 0){
        alert("you can't divide by zero !");
        return "unknown !!";
    }
    return num1/num2;
}

//console.log(div(x,y)); // => unknown !!

//console.log(div(y,x)); // => 0

//

function div2(num1,num2){
    if(num2 == 0){
        throw "you can't divide by zero";
    }
    return num1/num2;
}

function show(n1,n2){
    try{
        let res = div2(n1,n2);
        console.log(res);
    }
    catch (error) {
        alert("Error : "+error);
    }
}

// 

console.log(show(y,x)); // =>0

console.log(show(x,y)); // => you can't divide by zero
