// Q-86
console.log(typeof(3+4+ +'5'));   // o/p: number

// Q-88

console.log([]==[]);   // o/p : false


// Q-89

let data = [1,2,3].map(num => {
    if(typeof num=== 'number') return;
    return num * 2;
})
console.warn(data);     
// o/p :[ undefined, undefined, undefined ]

// Q-90

function getInfo(member){
    member.name = "Meenakshi";
}
const person = { name: "Yogita"};
getInfo(person);
console.log(person);             // o/p: { name : "Meenakshi"}
//-----------------------
let z=2;
setTimeout(()=>{             // web API
    p=100;
    console.log(p);
},0);