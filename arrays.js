// CREATING ARRAYS
let topthreeplayers = ['Ronaldo','Lukaku','Kaka' ];
console.log(topthreeplayers);

// ACESSING JS ARRAYS ELEMENTS
console.log(topthreeplayers[2]);

// MODIFYING ARRAYS
topthreeplayers[0] = 'Messi';
console.log(topthreeplayers);

// NESTED ARRAYS
let nestedarr = [
    [1,2,3,4],
    [2,4,5],
];
console.log(nestedarr[0][2]);

// ARRAYS AND OBJECTS
let users = [
    {name:'Ajara', id:'1'},
    {name:'Seidu', id: '2'},
];
console.log(users[1]);

// ARRAYS PROPERTIES AND METHODS
console.log(topthreeplayers.length);

// PUSH- ADDS AN ELEMENT FROM THE END
topthreeplayers.push( 'Ajara ');
console.log(topthreeplayers);

// POP-REMOVES AN ELEMENT FROM THE END
topthreeplayers.pop();
console.log(topthreeplayers);

// SHIFT - REMOVES AN ELEMENT FROM THE BEGINNING
topthreeplayers.shift();
console.log(topthreeplayers);

// UNSHIFT - ADDS AN ELEMENT FROM THE BEGINNING
topthreeplayers.unshift('Oliver');
console.log(topthreeplayers);

// FIND: To find an element in an array
// nameArray.find(fn)
let meat = ['Rice', 'Beans','Plantain'];
meat.find(function (elem) {
    console.log(elem); 
});

let fruits = ['Rice', 'Beans','Plantain'];
let isExist = fruits.find(function (elem){
    return elem=== 'Beans';
});
    console.log(isExist); 

    // FILTER: Used to filter an array based on specified condition.
    // const ages =[52, 40,30,18];
    // let agesArr = ages.filter(function 
    //     (age) {
        
    //     console.log(age);
    // });
// To filter ages above 18
    const ages =[52, 40,30,18];
    let agesArr = ages.filter(function 
        (age) {
            return age >= 18;
    });
    console.log(agesArr);
    // NB: The filter method do not modify the original array but returns a new array
    console.log(ages);

// INCLUDES: will check if certain element is  in the array and returns true
console.log(ages.includes(18));
console.log(ages.includes(19));

// MAP: is used to transform array elements and include the result into a new element. 
let newMap = ages.map(function(age){
    return age * 2;
    
});
console.log(newMap);