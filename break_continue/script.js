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
        break;
    }else{
        document.getElementById("existStd").innerHTML = `${name} is not in students `;
    }
  }
}  
