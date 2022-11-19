// Ques-

function getAge(){
//    'use strict'
    age = 21;
   console.log(age);
}
getAge();  // o/p : reference error : age is not defined.

//------------------------------------------------------->>>


// Ques-

const sum = eval('10*10+5');    // mathematic operation
console.warn(sum);     // o/p: 105

// Ques-65 : How long is cool_secret accessible ?
// sessipmStorage.setItem('cool_secret',123)
// => When we close the tab sessionStorage will get stopped

//------------------------------------------------------->>>


var name = "Meenakshi ";
var surname = "Lodhi Rajput";
console.log(name +" " + surname)   

//-------typeof of primitive types :------------------------>>>

console.log(typeof "John Doe") // Returns "string"
console.log(typeof 3.14) // Returns "number"
console.log(typeof true) // Returns "boolean"
console.log(typeof 234567890123456789012345678901234567890n) // Returns bigint
console.log(typeof undefined) // Returns "undefined"
console.log(typeof null) // Returns "object" (kind of a bug in JavaScript)
console.log(typeof Symbol('symbol')) // Returns Symbol

//---To check if a value is NaN, we use the isNaN() function,------>>>
//=>typeof of NaN will return a Number.

console.log(isNaN("Hello") ) // Returns true
console.log(isNaN(345) )  // Returns false
console.log(isNaN('1') ) // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false) )// Returns false
console.log(isNaN(undefined) )// Returns true