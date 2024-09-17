
const crypto = require("crypto")

console.log("Hello world");

 var a = 16233;
 var b = 9857690;
 //pbkdf2   -  Password Base Key Derative Function 
 

 //synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
 crypto.pbkdf2Sync('password','salt',5000000,50,"sha512")
 console.log("First Key is Generated");
  

 // Async Function
crypto.pbkdf2('password','salt',500000,50,"sha512" , (err,key)=>{
    console.log("Second key is Generated");
})


function mulitplyFn(x,y) {
    const result = x * y ;
     return result;

}
 var c = mulitplyFn(a,b)
 console.log("Multiplication result is: " , c);