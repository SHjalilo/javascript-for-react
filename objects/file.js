// challenge

let students = [
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

// 

function buildTable(data){
    var table = document.getElementById("myTable");
    
    for(var i=0;i<data.length;i++){
        var row = `<tr> 
                   <td> ${data[i].firstname} </td>
                   <td> ${data[i].age} </td>
                   <td> ${data[i].year} </td>
                   </tr>`;
                   
        table.innerHTML += row;
    }
}


// call function 

buildTable(students);
