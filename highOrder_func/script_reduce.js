// reduce 

var arr = [10,20,30,40,50];

let total = arr.reduce(function(prevValue,currentValue){
    return prevValue + currentValue;
});

console.log(total); // =>150
