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
document.getElementById("existStd").innerHTML = ` `;
function showFunction(){

var data = document.getElementById("std").value.toLowerCase(); 
      var isFound = false;
    for(var i=0;i<sList.length;i++){
      var tlc = sList[i].toLowerCase();

      if(data == tlc){
          isFound = true;
          //console.log("existe !");
      }
    }
    if(isFound == true){
        document.getElementById("existStd").innerHTML = `${data} exists in students `;
    }else{
        document.getElementById("existStd").innerHTML = `${data} is not in students `;
    }
}


