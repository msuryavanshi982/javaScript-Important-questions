// Q-

// let x =100;
// (()=>{
//     var x=10;              // IIFE func = when func invokes itself
// }) ();
// console.log(x);                  // 100

//------------------------------------------------------->>>

// Q-
console.log(!true - true); // -1

//------------------------------------------------------->>>

// Q-
console.log(true + +"10"); // 11

//------------------------------------------------------->>>

//Q-
// console.log("script start");
// setTimeout(function () {
//   console.log("Timeout");
// }, -0.9);
// Promise.resolve()
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });
// console.log("scripts end");

//------------------------------------------------------->>>

// Q-

var name = "meeshi";
(function () {
  console.log("this", this.name);
})();
