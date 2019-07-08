const array = [
    { id : 1, name : 'c' },
    { id : 2, name : 'a' },
    { id : 3, name : 'A' },
    { id : 4, name : 'b' },
    { id : 4, name : 'c' }
];

 // The filter method create a new array with everyting objects that meet
 // the condition specified in a callback fucntion.

const filter = array.filter(n => n.name === 'c');
console.log(filter);