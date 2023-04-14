// 2D arrays 

var student = [
["ahmed","ayoub","akram"],
["med","mayara","mustafa"],
["sido","said","salama"]
];

console.log(student);
console.log(student[1]); // => ["med","mayara","mustafa"]
console.log(student[2][0]); // => sido 


var class_3 = student[2];
console.log(class_3[1]); // => said

for(std in student){
    console.log(student[std]);
    document.getElementById("students").innerHTML += ` Classe ${std+1} : <br> | ${student[std]} | <hr> `;
}


