const person = {
    firstName: 'John',
    lastName: 'Rodríguez',
    tags: ['a', 'b', 'c'],
    // regular function:
    // here key word (this) point to global object window. this.firstName = undefined
    showTags() {
        this.tags.forEach(function (tag) { console.log(tag, this.firstName) });
    },
    // vs arrow function:
    // with (this) key word.
    showTags2() {
        // arrow function inherits of the containing (forEach) function
        this.tags.forEach(tag => console.log(tag, this.firstName));
    },
    // too regular function but second argument whith (this) key word:
    showTags3() {
        this.tags.forEach(function (tag) { console.log(tag, this.firstName) }, this);
    }
};

console.log('regular function:');
person.showTags(); 
console.log('arrow function:');
person.showTags2(); 
console.log('regular function with parameter (this):');
person.showTags3(); 