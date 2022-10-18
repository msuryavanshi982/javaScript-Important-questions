// Ques-71 
const person = {name : "Meenaskshi"};
function saysHi(age){
    return `${this.name} is ${age}` ;   // this refer to window object
}
console.log(saysHi.call(person, 23));
console.log(saysHi.bind(person, 23));  // funcn call

// o/p: Meenakshi is 23

function saysHi(age){
    return `${this.name} is ${age}` ;
}


// Q-75

const numbers = [1,2,3];
numbers[9] = numbers;
console.log(numbers);

// o/p: <ref *1> [ 1, 2, 3, <6 empty items>, [Circular *1] ]

