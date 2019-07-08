// Rest operator put in an array the arguments of the function.

function sumDemo1(args)
{
    // print 1
    console.log('args: ', args); 
}

console.log('sumDemo1: ', sumDemo1(1, 2, 3, 4, 5, 6));

//

function sumDemo2(...args)
{
    // print [1, 2, 3, 4, 5, 6]
    console.log('args: ', args); 
}

console.log('sumDemo2: ', sumDemo2(1, 2, 3, 4, 5, 6));

//

function sumDemo3(...args)
{
    return args.reduce((acumulator, currentValue) => acumulator + currentValue); 
}

console.log('sumDemo3: ', sumDemo3(1, 2, 3, 4, 5, 6));

// Rest parameter most be the last formal parameter. 

function sumDemo4(discount, ...args)
{
    const total = args.reduce((acumulator, currentValue) => acumulator + currentValue); 
    return total * (1 - discount);
}

console.log('sumDemo4: ', sumDemo4(0.1, 1, 2, 3, 4, 5, 6));

//  Whish the benefis for to use rest opetator?

function sumDemo5(discount, args)
{
    const total = args.reduce((acumulator, currentValue) => acumulator + currentValue); 
    return total * (1 - discount);
}

console.log('sumDemo5: ', sumDemo5(0.1, [1, 2, 3, 4, 5, 6]));

