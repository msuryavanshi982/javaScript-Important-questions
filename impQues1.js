// Ques-

// const name = "Meenakshi";
// console.warn(name());

// TypeError: name is not a function

//--------------------------------------------------->>>
// Ques- 

const result= false|| {} ||null ;
console.log(result);                  // {}

//--------------------------------------------------->>>
// Ques-

const Result = null || false || 0
console.warn(Result);         

//--------------------------------------------------->>>
// Ques-

function sumvalues(x,y,z){
   return x*y*z;
}
console.warn(sumvalues(...[1,2,3]));

//--------------------------------------------------->>>
// Ques-
const n = 'Meeanskhi Lodhi Rajput';
console.warn( !typeof n ==='object');                   //false
console.warn( !typeof n ==='string');                   //false
console.warn( !typeof n ===false);  //true

//------------------------------------------------------->>>