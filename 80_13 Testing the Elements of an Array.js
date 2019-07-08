const array = [
    { id : 1, name : 'c' },
    { id : 2, name : 'a' },
    { id : 3, name : 'A' },
    { id : 4, name : 'b' }
];

// If all objects are odd in property id of the array.
const everyOdd = array.every( i => i.id % 2 === 0);
console.log(everyOdd); // false

// If some object is odd in property id of the array.
const someOdd = array.some( i => i.id % 2 === 0 );
console.log(someOdd); // true