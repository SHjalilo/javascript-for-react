// objects add - update 

// key : value 
let students = {
    firstname : "khaled",
    lastname : "lmzliqui",
    age : 18,
    year : "2000",
    printFullName : function(){
        console.log(`Full Name is : ${this.firstname} ${this.lastname}`);
    }
}

// update
students.year = "2004";
console.log(students.year); // => 2004

// add 
students.grade = "A+";
console.log(students.grade);  // A+

// add object into array

let stds = [
    {
    firstname : "khaled",
    lastname : "lmzliqui",
    age : 18,
    year : "2000",
    printFullName : function(){
        console.log(`Full Name is : ${this.firstname} ${this.lastname}`);
         }
    },
    {
    firstname : "ahmed",
    lastname : "saadi",
    age : 34,
    year : "1988",
    printFullName : function(){
        console.log(`Full Name is : ${this.firstname} ${this.lastname}`);
         }
    },
    {
    firstname : "said",
    lastname : "farah",
    age : 29,
    year : "1997",
    printFullName : function(){
        console.log(`Full Name is : ${this.firstname} ${this.lastname}`);
         }
    },
];

console.log(stds); // => output down 
/*=> 
[
  {
    firstname: 'khaled',
    lastname: 'lmzliqui',
    age: 18,
    year: '2000',
    printFullName: [Function: printFullName]
  },
  {
    firstname: 'ahmed',
    lastname: 'saadi',
    age: 34,
    year: '1988',
    printFullName: [Function: printFullName]
  },
  {
    firstname: 'said',
    lastname: 'farah',
    age: 29,
    year: '1997',
    printFullName: [Function: printFullName]
  }
]
*/

console.log(stds[0]);  // => output down 
/*
{
  firstname: 'khaled',
  lastname: 'lmzliqui',
  age: 18,
  year: '2000',
  printFullName: [Function: printFullName]
}
*/

console.log(stds[0].firstname);  // => khaled 

console.log(stds[1].printFullName());  // => Full Name is : ahmed saadi

