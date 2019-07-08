const array = [
    { id : 1, name : 'c' },
    { id : 2, name : 'a' },
    { id : 3, name : 'A' },
    { id : 4, name : 'b' },
    { id : 5, name : 'c' }
];

// El método map() crea un nuevo array con los resultados de la llamada
// a la función indicada aplicados a cada uno de sus elementos.
const map = array.map( m => m.name = m.name.concat('_...'));
console.log(map);


//--------------------------------------------------------------------------------------------

let miMapa = new Map();

miMapa.set(1, 'c');
miMapa.set(2, 'a');
miMapa.set(3, 'A');

console.log('1:'+miMapa.get(1), '2:'+miMapa.get(2), '3:'+miMapa.get(3));