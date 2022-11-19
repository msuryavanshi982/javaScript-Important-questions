// Ques-

// console.log([[[[]]]]);   // console in crome

// nested array, every array has an another array except the last array has empty array having value nothing to it.

//----------------------------------------->>>
//Ques-> How to find OS name in browser(in javasript) : ->
//=> using inspect we have to write "navigator.platform" in console.


//-------------------------------------------------------------->>>

// Ques-
function fruit(){
    console.log(name);
    // console.log(price);    //ReferenceError: Cannot access 'price' before initialization
    var name = "apple";
    let price = 20;
}
fruit();             // o/p: apple

// note: In JS, there is a term called hoisting. In hoisting,  we get the output before declaring variable in case of var but in case of let a variable must be declare first then we will get the response.

//-------------------------------------------------------------->>>

// Q-

for(let i=0; i<3; i++){            // let = 0 1 2 
    setTimeout(()=>{
        console.warn(i);
    },2);     // 2000ms
}

//------------------------------------------------------->>>

// Q-

for(var i=0; i<3; i++){            // var = 3 3 3 
    setTimeout(()=>{
        console.warn(i);
    },2);     // 2000ms
}

//------------------------------------------------------->>>

//Ques-
console.warn(+true);    // 1
console.warn(typeof +true);   // number

