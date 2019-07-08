const array = [1, 2, 3, 4, 5];

for (const number of array) {
    console.log(number);
}

array.forEach((number, index) => console.log(number, index));