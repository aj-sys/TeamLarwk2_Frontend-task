// alert('Hello World');

// Creating a variable: u. can declare a variable by using let,const or var

let theRealGoat = 'Ronaldo';
let bestmusicianInNigeria = 'Davido';
console.log(theRealGoat);
console.log(bestmusicianInNigeria);
var name = 'Ajara';
const password = 'ama@2';

// DATA TYPES: pRIMITIVE AND oBJECT
// PRIMITIVE: Numbers, Strings, Boolean, Undefined, Null.

// NUMBERS
2 * 2
7 % 3
3 + 4 
// NaN is a special value in JSON. It means Not a Number. 
0/0
9 + NaN
// Boolean Data Type
let isMarried = true
let isGameOver = false

// String Data types
let goat = "Ronaldo";
let nameOfTown = '4567483292';
console.log(goat);
console.log(goat[4]);
console.log(nameOfTown.length);

// Primitive data types ar immutable. which means they cannot be modified.
// let goat = "Ronaldo";
// let's assume we want to capitalised the value of goat. we can't use goat.toUpperCase();
// We would have to create another variable and store it before we can get the value of goat to be capitalised.
let goatCap = goat.toUpperCase();
console.log(goatCap);

// Slice Method: This slices the value based on what you want to achieve
let part = goat.slice(1,7);
console.log(part);

// To get the first letter to be capitalised

// let firstLetter = goat[0].toUpperCase();
// let  result = firstLetter + part;
// console.log(result);


// Replace method
let message = 'Ajara is in Tech';
let result = message.replace('Ajara', 'Hanifa');
console.log(result);

// 
let city = '    Accra ';
// console.log(city);

console.log(city.trim());

// Null Data Type: This means nothing. It is not 0 but nothing
// let loggedIn = Null; 

// ( This means the value should not contain 0 but there should be nothing there)

// Undefined Data type
// if you use undefined, JS will make all your variables undefined so it is advised not to use it but rather 
// use null if you dont have a value folr a variable.