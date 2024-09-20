const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("setImmediate"));

Promise.resolve("Promise").then(console.log)


fs.readFile("./file.txt","utf-8",()=>console.log("File Reading CB"));

setTimeout(() => {
     console.log("TImer expired");
}, 0);

process.nextTick(()=>console.log("Process.nextTick"));
function printA() {
    console.log("a :" , a);
}
printA();
console.log("Last line of the file.");

//output :-


/** Console......
 *  a : 100
 *  Last line of the file.
 *  Process.nextTick
 *  Promise
 *  TImer expired 
 *  setImmediate
 *  File Reading CB
 */ 