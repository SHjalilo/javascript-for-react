 // challenge 
 
 // create random bg color ;   
 // function with rgb
function generatColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = `rgb(${x},${y},${z})`;
    console.log(bgColor); 
    //document.body.style.background = bgColor;
     document.getElementById("btn").style.backgroundColor = bgColor;
}
//generatColor();   
// function with #
function gc(){
var result = '#', i = 0;
while (i < 6) {
result += (Math.floor(Math.random()*16)).toString(16);
i++;
}
document.body.style.background = result;
}
//setInterval(generatColor,1500);
//gc();
// ----------------------------------------------------

var btn = document.getElementById("btn");
//on loading 
document.body.style.background = gc();

btn.addEventListener("click",myfunc);

function myfunc(){
    setInterval(gc,1500);
     setTimeout(generatColor, 130);
}






