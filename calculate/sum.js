// Module proctects their variable and functions from leaking
console.log("sum module is executed");
 var x = "Hello world"; // we can't give acces this variable to other module using require()
 function calculateSum(a,b){
 const sum = a + b;
 console.log(sum)
}

console.log("GitHub")
module.exports ={ x , calculateSum
   //{ //  x:x,
    //  calculateSum : calculateSum} we can also do this
    };
    // module.exports.x=x;
    // module.exports.calculateSum=calculateSum; we can also do this pattern to export 
  
    