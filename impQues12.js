// Ques-56

let a=3;
let b = new Number(3);    // object
console.log(typeof b);
console.log(a==b);
console.log(a===b); // because b has type of Object

// Ques-57

let Name;
Name = {}   //!type
console.log(Name);          // {}

// Ques-58

function fruit(){
    console.log("woof!");
}
fruit.name ="apple";
fruit();     // o/p: Woof !

// Ques-59

function sum(a,b){
    return a+b;
}
console.log(sum(1,"2"));    //o/p : 12

// Ques-60

let number=0;
console.log(++number);    // 1
console.log(number++);    // 1
console.log(number);      // 2
