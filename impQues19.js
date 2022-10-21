// Q-
function Car(){
    this.make = 'tata';
    return {make:'kia'};
}
const myCar = new Car();
console.log(myCar.make);        // o/p:  kia

//------------------------------------------------------->>>

// Q-

(()=>{
    let x=(y=10);
})();
console.log(typeof x)      // undefined

//------------------------------------------------------->>>

//Q-

(()=>{
    let x=y=10;
    //let x
})();
console.log(typeof y);     // number

//------------------------------------------------------->>>

// Q-

(()=>{
    let x=10;
})();
(()=>{
    let x=10;
})();
console.log(typeof x);     //undefined

//------------------------------------------------------->>>

// Q-

(()=>{
    let x=y=10;
})();
(()=>{
    let x=y=20;
})();
console.log(y);   // 20


