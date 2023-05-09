//

function getFullName(firstName,lastName){
    const message = 'hello';
    
    function createFullName(){
        return message + firstName +" "+ lastName;
    }
    
    return createFullName();
}

getFullName("ahmed","bazid"); // => hello ahmed bazid 

// Counter +=1

function counter(){
    let number =0;
    
    return function increment(){
        console.log(number);
        number += 1;
    }
}

const incrementing = counter();

incrementing();
incrementing();
incrementing(); 
incrementing();

console.dir(incrementing); // =>  Closure => number = 4

// Get PASSWORD 

function getPassword(password){
    //debugger;
    return function get(){
        console.log(password);
    }
}

const password = getPassword('h5syT0jE1');

password(); // => h5syT0jE1
