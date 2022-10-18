// Ques-
// let for = 100;   // error : Unexpected token 'for'

// becouse for is reserved keyword in javaScript


//-------------------------------------------------------------->>>

// Ques-
// function fruit(){
//     console.log(name);
//     console.log(price);    //ReferenceError: Cannot access 'price' before initialization
//     var name = "apple";
//     let price =20;
// }
// fruit();             // o/p: apple

// note: In JS, there is a term called hoisting. In hoisting,  we get the output before declaring variable in case of var but in case of let a variable must be declare first then we will get the response.

//-------------------------------------------------------------->>>

// Q-

for(let i=0; i<3; i++){            // let = 0 1 2 
    setTimeout(()=>{
        console.warn(i);
    },2);     // 2000ms
}

// Q-49

for(var i=0; i<3; i++){            // var = 3 3 3 
    setTimeout(()=>{
        console.warn(i);
    },2);     // 2000ms
}

//Ques-50
console.warn(+true);    // 1
console.warn(typeof +true);   // number

