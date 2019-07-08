const numbers = [1, -1, 2, 3];

// acumulator = 1, currentValue = -1 => 0
// acumulator = 0, currentValue = 2 => 2
// acumulator = 2, currentValue = 3 => 5
// el acumulador inicia en el primer elemento de numbers y...
// currentValue inicia en el segundo elemento de numbers.
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue );