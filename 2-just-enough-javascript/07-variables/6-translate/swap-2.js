// #todo

// a <- 'y'

// b <- 'x'

// temp <- b

// b <- a

// a <- temp

'use strict';

debugger;

('use strict');

// a <- 'y'
let a = 'y';

// b <- 'x'
let b = 'x';

// temp <- b
let temp = b;

console.log(a, b, temp);

// b <- a
b = a;

// a <- temp
a = temp;

console.log(a, b, temp);
