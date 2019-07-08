// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const myCicle = createCircle(10);

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// Object Equality:
let circle = new Circle(15);
let circle2 = new Circle(15);
let circle3 = circle;

console.log('Equals? ', circleEqual(circle, circle2)); // true
console.log('Same? ', circleSame(circle, circle2)); // false
console.log('Same? ', circleSame(circle, circle3)); // true

function circleEqual(circle, circle2) {
    return circle.radius === circle2.radius;
}

// if reference the same object?.
function circleSame(circle, circle2 ) {
    return circle === circle2;
}