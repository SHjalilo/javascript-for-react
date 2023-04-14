// break and continue 

var sList = ["salek","ahmed","hamza","med","jaber","ghali"];
for(var i =0;i<sList.length;i++){
document.getElementById("stdList").innerHTML+=sList[i]+" - ";
}
var btn = document.getElementById("btnSearch");
btn.addEventListener("click",showFunction);
document.getElementById("existStd").innerHTML = ` `;
function showFunction(){
var name = document.getElementById("std").value.toLowerCase(); 
   for(var student of sList){
    var tlc = student.toLowerCase();
    if(name == tlc ){
        document.getElementById("existStd").innerHTML = `${name} exists in students `;
        break; // break the loop => get out from loop
    }else{
        document.getElementById("existStd").innerHTML = `${name} is not in students `;
    }
  }
}  
//------------------------------------------------------------------------------------

for(var i =0;i<sList.length;i++){
document.getElementById("stdList2").innerHTML+=sList[i]+" - ";
}
var btn = document.getElementById("btnSearch2");
btn.addEventListener("click",showFunction2);
document.getElementById("existStd2").innerHTML = ` `;
function showFunction2(){
var name = document.getElementById("std2").value.toLowerCase(); 
   for(var student of sList){
    var tlc = student.toLowerCase();
    document.getElementById("existStd2").innerHTML = `${name} is not in students `;
    if(name != tlc ){
	continue;
    }else{
        document.getElementById("existStd2").innerHTML = `${name} exists in students `;
        break; 
    }
  }
}
