require("./xyz.js") //one module into another
// // require()
// const {calculateMultiply} = require("./calculate/multiply.js")
// // import {x, calculateSum } from "./sum.js"; // Newer way 
// // require("./sum.js")   // calculateSum(a,b) // it will not work 

// const {x,calculateSum} = require("./calculate/sum.js") // now we can get access 
const {calculateMultiply , calculateSum} = require("./calculate")
const data = require("./data.json")
var name = "Namaste NodeJs";
var a = 100;
var b = 23;
//  console.log(name)
//  console.log(a+b);
//  console.log(global)
 console.log(this);// Gives empty object (or empty object)
calculateSum(a,b) // it will work now 
console.log(globalThis===global);// it will give true 
calculateMultiply(a,b)
console.log(data)
