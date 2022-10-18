let str = "Hello, how are you?";
// console.warn([str]);

// console.warn({str});

// console.log(str.split(" "));             // ""

// console.log(str.split(""));
// console.log(str.split("a"));              // [ 'Hello, how ', 're you?' ]
// console.log(str.replace("o", "_")); 
// console.log(str.replace(/o/g,"_"));     

//Sub-string method :->

// console.log(str.substring(6,10));

// console.log(str.substring(1,str.length));
// console.log(str.substring(0,str.length-1));
// console.log(str.split(["o"]));
console.log(str.split("").reverse().join(""));
console.log(str.trim());

