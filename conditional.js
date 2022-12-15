// Conditional Staements

let isloggedIn = true;
if(isloggedIn == true){
    console.log('Zuri');

}

// if-else Statement

// let firstName = "Rita";
// if(firstName == "Rita"){
//     console.log("Rita is a beutiful lady");
// } else {

//     console.log('She is ugly');


// }

let firstName = "Ama";
if(firstName == "Rita"){
    console.log("Rita is a beutiful lady");
} else {

    console.log('She is ugly');

}

// if-else - if Statements
// let username = "Ajara";
// if (username == "  ") {
//   console.log("All fields are required");
// } else if (username =="Ajara") {
//     console.log("login");
// } else {
//         console.log("I don't know");
// }

let username = "  ";
if (username === "  ") {
  console.log("All fields are required");
} else if (username ==="Ajara") {
    console.log("login");
} else {
        console.log("I don't know you");
}

// COMPARISON OPERATORS. True= 1, false = 0. 
// It is advisable to be using triple equal to operator in your JS codes(===)
// Because javascript will check the value and the datat typeof. if you type in 8=="8", JS will say its true, 
// even though"8" is a string value. But if you type 8==="8". JS will now recognised the 
// "8" to be a string.

// typeof operator: Its used to check the dTtype of the IDBCursorWithValue, whetther its a String, boolean, number, etc. 
typeof "Ajara";

// Logical Operator - double uppersand(&&): It checks if one expression is the same as the other expression then returns true or false.

// let lastname = " AJ ";
// let fname ="secret";

// if (lastname === " AJ ") {
//   console.log("All fields are required");
// } else if (lastname ==="AJ" && fname==="secret") {
//     console.log("login");
// } else {
//         console.log("I don't know you");
// }

let lastname =  "AJ";
let fname ="secret";

if (lastname === " AJ ") {
  console.log("All fields are required");
} else if (lastname ==="AJ" && fname==="secret2") {
    console.log("login");
} else {
        console.log("I don't know you");

}

// LOGICAL OR(||)expression: will return true if either expression1 or two is true
// or both are true. The below will give us false because the value of cat and mouse declared
// are different from the values in the else if statement in both expressions.

let cat =  "AJ";
let mouse ="secret";

if (cat === " AJ ") {
  console.log("All fields are required");
} else if (cat ==="AJ1" || mouse==="secret2") {
    console.log("login");
} else {
        console.log("I don't know you");

}

// The below code will give us treu because one of the expressions in the else if statement is true
let food =  "AJ";
let drink ="secret";

if (cat === " AJ ") {
  console.log("All fields are required");
} else if (food ==="AJ" || drink==="secret2") {
    console.log("login");
} else {
        console.log("I don't know you");

}

// LOGICAL Notification(!): This returns true if expression 1 is false, otherwise, returns false

// !true = false
// !false = true

// FOR LOOPS

// The  code below  means that i=o, the condition is if i,11, it sshould loop till it gets to a number less than 11, which is 10
// The i += 1 is an incemental value of 1, which means the loop should increase looping by 1

for (let i=0; i < 11; i += 1) {
    console.log(i);
    
}


// The code below adds all the numbers (0+1 +2 +3 till +10)which will give us 55
// let num=0;

// for (let i=0; i < 11; i += 1) {
//     num += i;
// }
//     console.log(num);

    // WHILE LOOP

    // This code means loop till i<10. the i++ is a stoppage to stop the loop if the condition is met 
    // otherwise we will have indefinite loop.
    let i =0
    while (i < 10) {
        console.log(i);
        i++;
    }

    
    // FUNCTIONS 
    function getName(){
        console.log('Ajara');
    }

    getName('Ajara');

    

   