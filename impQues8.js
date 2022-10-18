//Ques-36
let A10 = "likes";
console.log(A10);       // likes

// Ques-37 

// let 10A ="likes"
//Note => In this case we will get syntax error : Invalid or unexpected token
// console.log(10A);

// Note => In javascript , whenever we create varuiables it must be start with $,_ symboles or alphabets otherwise we will get syntax error.

// Ques-38

let g = "likes";
let h = `likes`;
console.log(g===h);         // true

// Ques-39

let p = 1;
let q = 2;
console.warn(--q===p);       // true

// Ques-40

let a =2 , b = 4, c=5 ;
console.warn(a===b=== -c);    //false

// Because in javascript, the code runs from left to right. so, it is clear that first a===b the value is  true & when it compare with -c then it is checking the value of c with boolean. So, its's output should be false. 
