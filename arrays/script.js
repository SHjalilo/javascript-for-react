// arrays 

var students = ["med","salama","brahim","hamza","josef"];

console.log(typeof students); // => object 

document.getElementById("students").innerHTML = students;

console.log(students[0]); // => med 
console.log(students[3]); // => hamza
console.log(students[4]); // => josef

// add student 
students.push("rim");
console.log(students); // =>["med","salama","brahim","hamza","josef","rim"] 

// replace 
students[1] = "Ammar";
console.log(students); // =>["med","Ammar","brahim","hamza","josef","rim"] 

// delete with pop() 
students.pop();
console.log(students); // =>["med","Ammar","brahim","hamza","josef"] 

// delete - splice(index,howManyItemDelete,replacedItem)

students.splice(0,1);
console.log(students); // =>["Ammar","brahim","hamza","josef"] 

students.splice(1,2);
console.log(students); // =>["Ammar","josef"] 

students.splice(1,1,"dahha");
console.log(students); // =>["Ammar","dahha"] 

// 0 => put value without delete

students.splice(0,0,"jalil");
console.log(students); // =>["jalil","Ammar","dahha"] 

students.splice(1,0,"abdo");
console.log(students); // =>["jalil","abdo","Ammar","dahha"] 

