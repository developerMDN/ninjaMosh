const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined); // [1,2,3,4,5,6]

// El método slice() devuelve una copia de una parte del 
// array dentro de un nuevo array empezando por inicio 
// hasta fin (fin no incluido). 
// El array original no se modificará.

const slice = combined.slice(2,4);
console.log(slice); // [3,4]
const slice2 = combined.slice(2); // [3,4,5,6]
console.log(slice2); // [3,4]

// If call without any parameters, slice return an
// superficial copy of the original array. 

const arrayObject = [{id: 1}];
const copy = arrayObject.slice();
copy[0].id = 10;

console.log(arrayObject);