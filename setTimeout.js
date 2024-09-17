console.log("Hello World");
 
var a = 8793;
var b = 348907;

//this callback will only be pushed to call stack in v8 engine when the call stack is empty
setTimeout(() => {
    console.log("Call Me right now");
}, 0);// trust issues with setTimeout

setTimeout(() => {
    console.log("call me after 3 seconds");
}, 3000);
 

function mulitplyFn(x,y) {
    const result = x * y ;
    return result;

}
 var c = mulitplyFn(a,b)
 console.log("Multiplication result is :" , c);