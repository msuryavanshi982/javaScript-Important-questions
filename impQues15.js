

//------------------------------------------------------->>>

// Q-

const numbers = [1,2,3];
numbers[9] = numbers;
console.log(numbers);

// o/p: <ref *1> [ 1, 2, 3, <6 empty items>, [Circular *1] ]

//------------------------------------------------------->>>

var Name = [ "john" ];
Name.unshift( "charlie" );
Name.unshift( "joseph", "Jane" );
console.log(Name);

//------------------------------------------------------->>>

// Ques-
console.log([..."Meenakshi"]);  


//------------------------------------------------------>>>

// Q-

console.log(!!null);     // o/p: false

//------------------------------------------------------->>>

// Q-
console.log(!!"");     // o/p: false

//------------------------------------------------------->>>

// Q-
console.log(!! 1);     // o/p: true

//------------------------------------------------------->>>

let str="Hello, How are you ?"  
console.warn(str.split());   
console.warn([str]) 
console.warn([...str])   
 

//------------------------------------------------------->>>

// Q-
console.log(!true - true); // -1

//------------------------------------------------------->>>

// Q-
console.log(true + +"10"); // 11

//------------------------------------------------------->>>

// Q-
const Person = {
    name: "Mishti",
    age : 10
};
for(item in Person){
    console.log(item);       
}

//------------------------------------------------------->>>

// Q-

let d = 3+4+'5';
console.log(typeof d);    // string
console.log( d); 
   // string

//--------------------------------------------------------->>>

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text)

// Q-86
console.log(typeof(3+4+ +'5'));   // o/p: number

// Q-88

console.log([]==[]);   // o/p : false