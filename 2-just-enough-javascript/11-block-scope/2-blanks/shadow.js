// #todo

'use strict';

debugger;

let greeting = 'hello';

{
  let greeting = 'hello';
  greeting = 'bye';
  console.log(greeting);
}

console.log(greeting === 'hello'); // true

/* distractors:


    Log

  Console



*/
