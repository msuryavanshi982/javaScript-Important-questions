// Ques-

// let a=[];
// let b=[];
// console.warn(a==b);           // o/p: false
// console.log(a===b);           // o/p: false


// Here , we are checking the memory location not the values & for these two values memory locations are assigned differently. Thersfore, for these console, the outputs should be false.

//-------------------------------------------------------------->>>

// Ques-

// let x = [];
// let y = x;
// console.log(x==y);         // true
// console.log(x===y);        // true

// Here, the memory location of x is same as y if we assign x to y. Because  y variable is pointing to x variable & both have same memory location. That's why output would be true.

//-------------------------------------------------------------->>>

// Ques- 

let c=[20];
let d=[20];

console.warn(c[0]==d[0]);         // true
console.warn(c[0]===d[0]);        // true

//Here, we are checking the indexes of both the variables. The values of these two variacles is same beacause here we have elements. Therefore the output should be true. 

// Ques- 

let arr =[1,2,3,4,5];
let coder = {"name":"Meenakshi"};

console.warn(...arr);

// If we use destructure, the array will break all the elements inside the array will get outside. Therefore, we will get th output as 1 2 3 4 5 

// Ques-

console.log(typeof NaN);      // number

// Note => NaN = not a number