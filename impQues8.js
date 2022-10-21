//Ques-
let A_$ = "likes";
console.log(A_$);       // likes
//--------------------------------------------->>>

// Ques-

let g = "likes";
let h = `likes`;
console.log(g===h);         // true
//--------------------------------------------->>>
// Ques-

let p = 1;
let q = 2;
console.warn(--q===p);       // true
//--------------------------------------------->>>
// Ques-

let a =2 , b = 4, c=5 ;
console.warn(a===b=== -c);    //false

// Because in javascript, the code runs from left to right. so, it is clear that first a===b the value is  true & when it compare with -c then it is checking the value of c with boolean. So, its's output should be false. 
