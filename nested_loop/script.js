// nested loop


var student = [
["ahmed","ayoub","akram"],
["med","mayara","mustafa"],
["sido","said","salama"]
]; 

for(var i =0;i<student.length;i++){
    var currentClass = student[i];
    document.getElementById("std").innerHTML +=`<hr> Class ${i+1} : <hr>`;
	for(var j=0;j<currentClass.length;j++){
	    //console.log(currentClass[j]);
	    //console.log(student[i][j]);
	      var currentStudent = currentClass[j];
	      document.getElementById("std").innerHTML +=` => ${currentStudent} <br>`;
	}
}

// -----------------------------------------------------------------------------------




















