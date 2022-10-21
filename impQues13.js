// Ques-

function getAge(){
    'use strict'
   //  age = 21;
   // console.log(age);
}
getAge();  // o/p : reference error : age is not defined.

//------------------------------------------------------->>>

// Q-

function getAge(){
    // 'use strict'
    age = 21;
   console.log(age);
}
//------------------------------------------------------->>>

// Ques-

const sum = eval('10*10+5');    // mathematic operation
console.warn(sum);     // o/p: 105

// Ques-65 : How long is cool_secret accessible ?
// sessipmStorage.setItem('cool_secret',123)
// => When we close the tab sessionStorage will get stopped
