// CREATING OBJECTS
// let person = {
//     fname: 'Shamima',

// };
// console.log(person)

const user = {
    fname: 'Salman',
    lname: 'Munkaila',
    age: 11,
    getFullName: function () {
     console.log(this);   
    return this.fname + ' ' +  this.lname;
},
        
};

// ACCESSING PROPERTIES
// Dot Notation
console.log(user.fname);
console.log(user.lname);
console.log(user.age);
let Name = user.getFullName();
console.log(Name);
// Bracket Notation
// console.log(user['fname']); 

// MODIFYING THE VALUE OF THE PROPERTIES
user.fname = 'Aisha';
console.log(user);

// AADING A NEW PROPERTY TO AN OBJECT
user.isMarried = true;
console.log(user);

// DELETING A PROPERTY FROM AN OBJECT
delete user.age;
console.log(user);
// CHECKING IF A PROPERTY EXIST IN THE OBJECT
console.log('lname' in user);
console.log('address' in user);

// THE "FOR .. IN" LOOP
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// Example: Write code to sum all salaries and 
// store in a variable sum
let salaries = {
    Ajara:300,
    Shamima:200,
    Salman: 250,
    AISHA: 230,
};
let sum = 0;
for (let sal in salaries) {
    sum += salaries[sal];
}
console.log(sum);
