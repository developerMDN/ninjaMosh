let numbers = [1,2,3,4,5,6];
let another = numbers;

numbers = [];
console.log(numbers, ',' ,another); // [] , [1,2,3,4,5,6];

numbers.length = 0;
console.log(numbers, ',' ,another); // [] , [];

numbers.splice(0, numbers.length);
console.log(numbers, ',' ,another); // [] , [];