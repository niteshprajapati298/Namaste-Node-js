
const fs = require('fs')
const https = require("https")
 console.log("Hellow world")
 var a = 1078698;
 var b = 20986;
    
  https.get('https://dummyjson.com/products/1' , (res)=>{
    console.log("Fetched Data Successfully")
  })
   setTimeout(() => {
      console.log("settimeout called after 5 seconds");
   }, 5000);
     fs.readFile("./file.txt",'utf8',(err,data)=>{
        console.log("File Data :" , data);
     })
   
     
     function mulitplyFn(x,y) {
         const result = a * b;
         return result;
         
     }
     var c = mulitplyFn(a,b)
     console.log(`Multiplication result is: ${c}`) 