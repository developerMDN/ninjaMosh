const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

// print false, compare references.
console.log(courses.includes({id: 1, name: 'a'}));

// El método find() devuelve el valor del primer elemento del 
// array que cumple la función de prueba proporcionada. 
// En cualquier otro caso se devuelve undefined.

const course = couses.find( course => course.name === 'a' ); // {id: 1, name: 'a'}

// El método findIndex() devuelve el índice del primer elemento de un array que cumpla 
// con la función de prueba proporcionada. En caso contrario devuelve -1.

const courseIndex = couses.findIndex( course => course.name === 'b' ); // 1