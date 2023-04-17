// Objects 

// key : value 
let students = {
    firstname : "khaled",
    lastname : "lmzliqui",
    age : 18,
    year : "2000",
}

console.log(students); // => { firstname: 'khaled', age: 18, year: '2000' }

console.log(students.name); // => khaled 

function printFullName(st){
    console.log(`Full Name is : ${st.firstname} ${st.lastname}`);
}

printFullName(students); // => Full Name is : khaled lmzliqui

let car = {
    name : "Honda",
    color : "Black",
    hp : 180,
    year : "2008",
    printInfo : function(){
        console.log(`Car name : ${this.name} , Color : ${this.color} , 
                    Horse power : ${this.hp} , Year : ${this.year}`);
    }
}

car.printInfo(); //Car name : Honda , Color : Black , Horse power : 180 , Year : 2008






