// while loop

// normal while 

//var i = 11;
// infinit loop +00
//while(i < 10){
    //console.log(i);
//}

//
var i = 0; // i =11 : => nothing 
while(i <= 10){
    console.log(i);
    i++;
}

// do while

var x = 0; // x =11 : => 11

do{
    console.log(x);
    x++;
}while(x <= 10)

//

var sList = ["salek","ahmed","hamza","med","jaber","ghali"];
var i =0;
while(i<sList.length){
    document.getElementById("stdList2").innerHTML+=sList[i]+" - ";
    i++;
}
var btn = document.getElementById("btnSearch2");
btn.addEventListener("click",showFunction);
document.getElementById("existStd2").innerHTML = ` `;
function showFunction(){
var name = document.getElementById("std2").value.toLowerCase(); 
console.log(name);
var student = 0;
while(student<sList.length){
    var tlc = sList[student].toLowerCase();
    //console.log(sList[student]);
    if(name == tlc ){
       // console.log(sList[student]); // => for testing 
      document.getElementById("existStd2").innerHTML = ` ${name}  exists in students `;
       break; 
    }else{
       document.getElementById("existStd2").innerHTML = `${name} is not in students `;
    }
    student ++;  
}
}
