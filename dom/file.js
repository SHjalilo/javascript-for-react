// challenge 

// global var
let output = document.getElementById("output");
let isSubmit = false;
let btn = document.getElementById("btn");
// onchange function
function nameChanged(inputComeFromThis){
    //console.log(inputComeFromThis.value);
    document.getElementById("p").innerHTML = inputComeFromThis.value;
}
//
btn.addEventListener("click",()=>{
    if(!isSubmit){
        isSubmit = true;
        //output.innerHTML = "";
        let child = output.firstChild;
        output.removeChild(child);
    }
    let value = document.getElementById("inp").value;
    let textNode = document.createTextNode(value);
    output.appendChild(textNode);
    let brElement = document.createElement("br");
    output.appendChild(brElement);
    value = "";
});
// use 'this' with function() , not ()=> 
output.addEventListener("mouseover",function(){
    if(isSubmit){
        this.style.background = "green";
    }else{
        this.style.background = "red";
    }
});
//
output.addEventListener("mouseout",()=>{
    output.style.background = "";
});
