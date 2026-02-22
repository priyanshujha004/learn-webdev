// Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined.
// Reasons we are using IIFE is to Avoid Global Scope Pollution

// GENERAL SYNTAX OF FUNCTION DEFINATION & CALL
function helloWorld(){
    console.log("Hello World");
}
helloWorld();

// IIFE SYNTAX
(function hiduniya(){ // Named IIFE
    console.log("Hiduniya");
})(); // It is required to use Semi-Colon to stop iffe execution. 

// The Function is Defined and Called Immediately, it does not pollute the global scope as it is not stored in any variable. It is executed only once.

((name)=>{ // IIFE with Arrow Function and Parameter.
    console.log(`Hello ${name} Again`);
})("Priyanshu") 
