// challenge

let arr = [2,4,9,23,435];

function cumulativeAddition(arr){
    let newArr =[];
    const len = arr.length;
    let total= arr.reduce(function(pre,cur){
        return pre + cur ;
    });
    //let output = [total,arr.length]; => return output ;
    newArr.push(total,len);
    return newArr;

}

console.log(cumulativeAddition(arr)); // => [ 473, 5 ]


