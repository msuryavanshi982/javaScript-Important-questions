
// Ques-66

const obj = {1:"a", 2:"b", 3:"c"};
console.warn(obj.hasOwnProperty("8")); // true

console.log(obj.hasOwnProperty(1));  //true

// It gives boolean values when value is present . we can use "" or as it value

// Q-67 

const Qbj ={
    a : "one",
    b : "two",
    a : "repeat",
} 

console.log(Qbj);

// Q-68

for(let i=1; i<5 ; i++){
    if(i===3) continue ;
    console.log(i);
}

// Q-67

const foo = ()=>console.log("first");
const bar =()=> setTimeout(()=>console.log("second"), 1000);
const baz =()=>console.log("third");

bar();
foo();
baz();

// Q-70


    // <div onclick="console.log('first div')">
    //     <div onclick="console.log('second div')">
    //     <button onclick= "console.log('button')">
    //         click !
    //     </button>

    //     </div>
    // </div> 

