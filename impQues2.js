// Ques- : How to get name property without operator

// const daTa ={"name":"Yogita", "roll_no": 95 , "skills": '20'};
// console.warn(daTa.name);    // Yogita
// const {name} = daTa;       
//---------------------------------------->>>

// Ques- :  To merge two objects : 
let data ={name:"Yogita", roll_no: 95 , skills: '20'};
let info = {state: "UP", City: "Noida", mail: "xyz@gmail.com"};
 const Data = {...data, ...info};
 console.log(Data);   
 //---------------------------------------->>>

 const fine = { data, ...info};
 console.log(fine);
//---------------------------------------->>>

 let obj1 = { Name : "Hello", age : "50"};
 let obj2 = { Name : "world", roll_no : 77};
 let good ={ ...obj1, ...obj2};
 console.warn(good);

 //------------------------------------------------------->>>