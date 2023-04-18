// DOM

//document.getElementById("title").innerHTML =" welcome tto my channel";

let elem1 = document.getElementById("title") ;
let elem2 = document.getElementsByClassName("title") ;

console.log(elem1);
console.log(elem2);

document.getElementsByClassName("title")[0].innerHTML ="Whalcome";


// getElementsByTagName 

let x = document.getElementsByTagName("h3");
console.log(x);

document.getElementsByTagName("h3")[1].innerHTML ="hello 1";

for(element of document.getElementsByTagName("h3")){
    element.innerHTML = "Hi";
}
