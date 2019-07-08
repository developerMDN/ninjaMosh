const array = [
    { id : 1, name : 'c' },
    { id : 2, name : 'a' },
    { id : 3, name : 'A' },
    { id : 4, name : 'b' }
];

const sort = array.sort( (a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const _a = a.name.toLowerCase();
    const _b = b.name.toLowerCase();

    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
});

console.log(sort);