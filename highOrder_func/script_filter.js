// filter

var arr = [10,20,30,40,50];

let myArr = arr.filter(function(element){
    //if(element > 35){
      //  return true;
    //}else{
     //   return false; 
    //}
    return element > 35;
});

console.log(myArr); // => [40,50]
