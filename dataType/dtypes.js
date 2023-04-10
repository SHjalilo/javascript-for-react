var na = "med";
var age = 27;


console.log(typeof "hello");

console.log(typeof na);


console.log(typeof 600);

console.log(typeof 6.78);

console.log(typeof age);

// js is dynamic 

na = "mosa";
console.log(na); // => mosa

na = 20;
console.log(na); // => 20 

//-------------------------------------------------------------------------------------------
console.log('----------------------------------');
// Strings :

var title = "hello world";
// counting start with 0 , ending is (number - 1)
console.log(title.substring(0,5)); // => hello 


console.log(title.length); // => 11

// function with () . prop without ()
console.log(title.toUpperCase()); // =>  HELLO WORLD

title = "HELLO WORLD";

console.log(title.toLowerCase()); // =>  hello world

// replace : case sen !

var ex = "hello javascript";
console.log(ex.replace("hello","Hello"));  // => Hello javascript


console.log(ex.charAt(1));  // => e

console.log(ex[0]);  // => h

// ----------------------------------
console.log("------------------------------")

var word = "Peace";
console.log(`${word}, and love .`); // `` => alt-GR + 7 


// challenge !

var myStr = "Hello world";
console.log(myStr.toUpperCase()); 
console.log(myStr.replace("o", "y")); 

console.log("------------------------------")

// reverse string function
function rev(str){
    // split method return a new array 
    var slp = str.split(""); // => ['h','e','l','l','o']
    // reverse method to reverse array 
    var re = slp.reverse(); // => ['o','l','l','e','h']
    // join method to join all elements of the array into a string 
    var joinS = re.join(""); // => "olleh"
    // return reverse string 
    return joinS;
}
 // 2 method to write reverse method :
 function revStr(str){
    return str.split("").reverse().join("");
 }
 //
console.log(rev(myStr)); // => rev
console.log(revStr(myStr)); // => revStr

// use outerHTML 
//
var title = document.getElementById("title").innerHTML;
var reverse = rev(title);
var res = document.getElementById("result").innerHTML = `<h1> ${reverse}</h1>`;

console.log(" hi "+reverse);

// write from user 

document.getElementById("submit-btn").addEventListener("click",function() {
    var inputStr = document.getElementById("str-input").value;
    console.log(inputStr);
    var upper = inputStr.toUpperCase();
    var replacedWord = upper.replace("O","OU");
    var reversedWord = upper.split("").reverse().join("");

    document.getElementById("result").innerHTML=`${upper} --- replaced words : ${replacedWord} , --- ${reversedWord} `;
    
});





   


