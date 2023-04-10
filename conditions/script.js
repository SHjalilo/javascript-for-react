// conditions 

var age = 70; // => var age = 17;

if (age >= 50){
    console.log("Old , age is : "+age); // => Old , age is : 70
}else {
    console.log("Young , age is : "+age); // => (if age =17)  Young , age is : 17
}

//
var ageTest = 80;
// in this case we have agetest = 80 => Old !
if(age >=60){
	console.log("Old");
} else if (age >=40 && age < 60){
	console.log("Mid");
} else {
	console.log("Young");
}
console.log("done");


// switch - case 

var health ="strong"; // weak 

switch (health){
	case("strong"):
		console.log("your health is good");
		break;
	case("weak"):
		console.log("your health is not good");
		break;  
	defult:
		console.log("good");
}

//

var omr = 80;

switch (true){
	case(omr >= 60):
	    console.log("Old");
	    break;
	case(omr >= 40):
	    console.log("Mid");
	    break;	    
	defult:
	    console.log("Young");


}
