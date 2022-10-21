// Ques-
let data ={name:"Meenakshi"};
delete data.name;
console.warn(data);      // {}

//---------------------------------------------------------------------->>>

// Ques-: to convert data into boolean false value

let Data= "true";
console.warn(!!Data);      //false

//---------------------------------------------------------------------->>>

// Ques-:  what is the differences b/w map & forEach methods 
// ===>>> one diference is map always returns something but forEach doesn't returns anything.

//---------------------------------------------------------------------->>>

// Ques-
let dAta=["Meenakshi", "Mishti","Rati"];
delete dAta[1];   // It will replace "Mishti" with an empty space & create empty space

console.log(dAta);   

// o/p : [ 'Meenakshi', <1 empty item>, 'Rati' ]


//---------------------------------------------------------------------->>>
// Ques- 

console.warn(dAta.length);      // 3


