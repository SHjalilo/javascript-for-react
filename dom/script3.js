// elements  add / remove 

//document.getElementById("ul").innerHTML +="<li> jalilo </li>";

// create element to add => li
let liElement = document.createElement("li");
// create child of element => "text"
let textContent = document.createTextNode("jalilo");
// add child => "text" to element => "li" with : appendChild
liElement.appendChild(textContent);
// add child "li" to element "ul" => append 
document.getElementById("ul").appendChild(liElement);


//delete

document.getElementById("ul").removeChild(liElement);

let textToremove = document.getElementById("ttm");
document.getElementById("ul").removeChild(textToremove);
