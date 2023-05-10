// Object Litteral 

let studentInfo = {
    firstName: "Jhon",
    lastName: "Daqes",
    
    // Getter
    get fullName(){
        return `${this.firstName - this.lastName}`;
    },
    
    // Setter
    set fullName(value){
        //console.log(value);
        [this.firstName , this.lastName] = value.split(" ");
    },
}


//console.log(this);  // => windows

console.log(studentInfo.fullName); // => jhon - Daqes

studentInfo.fullName = "Jhon Cena";

console.log(studentInfo.fullName); // => Jhon Cena  
