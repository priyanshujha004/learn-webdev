// function greetUser(){
//     console.log("Hello User");
// }
// greetUser(); // Calling the function

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// function addition(num1,num2){ // Function with Parameters
//    return (num1 + num2);
// }
// const ans = addition(3,5) // Function Arguments 
// console.log(ans);
// // --------------------------------------------------------------------------------------------------------------------------------------------------
// function UserloginMessage(username = "Rohan"){ // "Rohan" is the default parameter value. 
//     if(username===undefined){
//         console.log("Username is required");
//         return;
//     }
//     return `${username} has logged in successfully`;
// }
// console.log(UserloginMessage()); // Undefined
// // console.log(UserloginMessage("Priyanshu")); // Priyanshu has logged in successfully

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// // Shopping Cart Price Calculation using Functions & Spread Operators

// function calculateCartPrice(...cost){ // Spread Operators
//     return cost // Returns an array of all arguments.
// }
// console.log(calculateCartPrice(100,200,300)); 

// function name(name1, name2,...firstname){ // Takes first two arguments into name1 & name2 while rest in the array.
//     return firstname
// }
// console.log(name("Priyanshu","Ramit","Sahil","Prateek"));

// // --------------------------------------------------------------------------------------------------------------------------------------------------

// // Function Taking Object as a Parameter
// const user = {
//     username: "Priyanshu",
//     age : 21,
// }

// function userDetails(anyObject){ // Here the Type Is Not Checked for anyObject
//     console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
// }
// userDetails(user); // Calling Function With Predefined Objects

// // Calling Function With Object Directly
// userDetails({
//     username: "Ramit",
//     age : 22,
// })

// // Calling Function With Arrays
// const myarray = [200,400,850];
// function returnSecondValue(getArray){
//     return getArray[1];
// }
// console.log(returnSecondValue(myarray)); 

// // ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Global & Local Scope of Variables

// var c = 300
// var a = 100
// if(true){
//     var a = 10
//     const b = 20
//     console.log("Inner A :", a)
// }
// console.log(a)
// // console.log(b) // Reference Error as b cannot be accessed outside the block scope.
// console.log(c) 

// Var is function scoped, it can be accessed outside the block scope but not outside the function scope. 
// It can be redeclared and updated. It is hoisted to the top of the function or global scope.

// Let is block scoped, it cannot be accessed outside the block scope. It can be updated but not redeclared. It is hoisted to the top of the block scope but not initialized.
// Const is block scoped, it cannot be accessed outside the block scope. It cannot be updated or redeclared. It is hoisted to the top of the block scope but not initialized.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// function one(){
//     const username = "Rohan";
//     function two(){
//         const website = "www.rohan.com";
//         console.log(username);
//     }
//     two() // Prints Username as it can access the parent function, but website cannot be accessed in function one as it is defined in the scope of child function.
//     // console.log(website); // Reference Error as website is not defined in the scope of function one.
   
// }
// one()

// if(true){
//     const name = "Priyanshu";
//     if(name==="Priyanshu"){
//         const age = 21;
//         console.log(name, age);
//     }
//     //console.log(age); // Reference Error 
// }
// // console.log(name); // Reference Error 


// // There are two methods to declare and call a function in JS. 
// // The first method allows you to call the function before declaration, while the second
// // method gives an error if you try to call the function before declaration.


// // METHOD 01

// console.log(addOne(5)); // Prints 6, as access is allowed. Called Hoisting
// function addOne(num){
//     return num + 1;
// }

// // METHOD 02

// console.log(addTwo(5)); // Raises Error 
// const addTwo = function(num){
//     return num + 2;
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Function

const user = {
    username : "Priyanshu",
    fees : 500,
    welcomeMessage(){
        console.log(`${this.username},Welcome To Website`); // This Refers to Current Object. 
    }

}
console.log(user);
