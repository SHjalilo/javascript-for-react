// loop arrays

var school = ["salek","ahmed","hamza","med","jaber","ghali"];



for(var i =0;i<school.length;i++){
	//var name = school[i];
	//console.log(name[0]); // => T , T , h , m , j
	//console.log(school[i][0]); // => T , T , h , m , j
	if(school[i][0]=="T"){
	    console.log("Teacher is : "+school[i]);
	    document.getElementById("school").innerHTML+=school[i]+" <br> ";
	}

}
//

// challenge solution :
// coding function like includes() 

var sList = ["salek","ahmed","hamza","med","jaber","ghali"];
for(var i =0;i<sList.length;i++){
document.getElementById("stdList").innerHTML+=sList[i]+" - ";
}
//
var btn = document.getElementById("btnSearch");
btn.addEventListener("click",showFunction);
//
var data = document.getElementById("std").value;
function showFunction(){

    for(var i=0;i<sList.length;i++){
      if(sList[i] === data){
          //console.log("existe !");
          document.getElementById("existStd").innerHTML = `${sList[i]} exists in students `;
          break;
      }
    }
}


