// #todo

// a <- 'y'

// b <- 'x'

// temp <- a

// a <- b

// b <- temp

'use strict';

debugger;

// a <- 'y'
let a = 'y';

// b <- 'x'
let b = 'x';

// temp <- a
let temp = a;

console.log(a, b, temp);

// a <- b
a = b;

// b <- temp
b = temp;

console.log(a, b, temp);
