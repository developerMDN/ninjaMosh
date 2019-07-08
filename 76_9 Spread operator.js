// spread: propagación

const first = [1, 2, 3];
const second = [4, 5, 6];

// All it´s elements are spread individualy.
// that is a declare of new array and adding the
// elements of the first and second arrays.
const combined = [...first ,'A', ...second,'Z']; 
console.log(combined); // [1, 2, 3, A, 4, 5, 6, 'Z'];

// const copy = combined.splice();
const copy = [...copy];

