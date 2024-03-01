// #todo

'use strict';

debugger;

let greeting = 'hello';

{
  let newGreeting = 'bye';
  greeting = newGreeting;
}

console.log(greeting === 'bye');
