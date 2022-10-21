// Ques-
const Name ="Yogita";
const roll_no =23;
console.warn(isNaN(Name));        //true
console.warn(isNaN(roll_no));        //false

//---------------------------------------------------------->>>

// Ques-: to modify person (object):

let person = { "name":"Meenakshi"};
Object.seal(person);
console.warn(person);
person.name = "Yogita";

console.warn(person);

//---------------------------------------------------------->>>

// Ques- :to remove first element

let data =[2,3,4,5];

data.shift();
console.warn(data);

//---------------------------------------------------------->>>

// Ques- : to remove last element 

data.pop();
console.warn(data);

//---------------------------------------------------------->>>

// Ques-: to check any no. is odd or even
 const num =31;
 console.warn(num%2==0);      // true
