
console.log(typeof typeof 1);    // string


function saysHi(){
    return (()=>0)();
}
console.log(typeof saysHi());     // number


// 
// Ques-
const person = {name : "Meenaskshi"};
function saysHi(age){
    return `${this.name} ${age}` ;   // this refer to window object
}
// console.log(saysHi.call(person, 23));
// console.log(saysHi.bind(person, 23));  // funcn call



