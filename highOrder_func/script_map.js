// map 

var arr = [10,20,30,40,50];

// chose the name of parameter => element => focus on item in array
let myArr = arr.map(function(element){
    return element * 10;
});

// 

console.log(myArr); // [100,200,300,400,500]
