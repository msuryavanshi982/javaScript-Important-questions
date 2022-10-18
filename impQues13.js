// Ques-62

function getAge(){
    'use strict'
   //  age = 21;
   // console.log(age);
}
getAge();  // o/p : reference error : age is not defined.

// Q-63

function getAge(){
    // 'use strict'
    age = 21;
   console.log(age);
}

// Ques-64

const sum = eval('10*10+5');    // mathematic operation
console.warn(sum);     // o/p: 105

// Ques-65 : How long is cool_secret accessible ?
// sessipmStorage.setItem('cool_secret',123)
// => When we close the tab sessionStorage will get stopped
