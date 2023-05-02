// 

class Animal {

    //constructor(){
         //console.log("new object");
    //}
    
        constructor(animalName,animalColor){
         this.name=animalName;
         this.color=animalColor;
    }
    
    
    move(){
        console.log("moving");
    }

    jump(){
        console.log("jumping"+ this.name);
    }
} 
 
//let lion = new Animal; // new object 
//let tiger = new Animal; // new object 


let dog = new Animal("sam","beige");

console.log("dog.name"); // => sam

lion.move(); // => moving 

dog.jump(); // => jumping sam


