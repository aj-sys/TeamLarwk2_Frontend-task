// FUNCTIONS 
// 1. Declaring a function
// function functionName() {

// }

function sayHello() {
    console.log('Hello World!')
}

// 2. Calling a function
sayHello();
function getName(name){
console.log('name');
}

getName('Anita');
// function getName(){
//     console.log('Ajara');
// }

// getName('Ajara');

// function getFullName( firstname, lastname){
//     let fullName;
//     fullName = firstname + ' ' + lastname;
//     return fullName;
// }
// let fullName = getFullName( 'Ajara', 'Amadu')
// console.log(fullName);
// Any code after the return statement will not return. JS will only run codes that comes before the return statement

// DEFAULT VALUES
// If the code does not specify the second argument, then you can use a default Value
// You do this by bringing in an assignment operator then you put any value in the second argument.

function getFullName( firstname = 'Hello', lastname = 'Somebody'){
    let fullName;
    fullName = firstname + ' ' + lastname;
    return fullName;
}
let fullName = getFullName()
console.log(fullName);

// Example: Write a function min(a,b) which returns the 
// least of two Number, a and b.

function  min(a, b) {
if (a < b) {
    return a;
} else {
    return b;
}

}
console.log(min(1, 4));
