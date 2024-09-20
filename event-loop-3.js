
 const fs = require("fs")
setImmediate(() => console.log("setImmediate"))


setTimeout(() => console.log("Timer expired"), 0);


Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8", () => {
    
    setTimeout(() => console.log("2nd Timer expired"), 0);
    
    process.nextTick(()=>console.log("2nd nextTick"))

    
    setImmediate(() => console.log("2nd setImmediate"))
   
    console.log("File Reading CB");

})

process.nextTick(() => console.log("Process.nextTick"));


console.log("Last Line of the file.");



  // Output:-
/** Console.....
 * Last Line of the file.
 * Process.nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 * 2nd nextTick
 * 2nd setImmediate
 * 2nd Timer expired
 * 
 */

