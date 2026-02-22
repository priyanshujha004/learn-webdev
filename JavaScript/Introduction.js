const name = "Priyanshu"
let age = 21
var stid = 145
let state; // Only declared variables have an undefined value.

/*
const, let & var are three different ways to initialize a variable in Javascript or JS. But all three keywords have different
usecases, depending upon the scope of the variable.

While using keyword "const", once a value is declared, it cannot be changed. Using keyword "let", values can be re-defined in the same scope.
Keyword "var" is NOT preferred, as it changes the variable globally.
*/

age = 22 // Change is possible.
// name = "Rohan" This operation isn't possible in JS as name is stored in const variable.

console.table([name,age,stid,state])

// -------------------------------------------------------------------------------------------------------------------------------------------------

"use strict"; // Treats all JS Code as Newer/Latest Verion

/*
Apart from basic datatypes, two important datatypes are 
    1. Null : defined as an object is JS, is a type that describes a null represnataion.
    2. Undefined : when variable is declared but value is not assigned.
*/

let temp = null; // temp variable stores a null value.
let phone; // undefined datatype

console.log(typeof null); // Object 
console.log(typeof undefined); // Undefined

// -------------------------------------------------------------------------------------------------------------------------------------------------

let score = "33"
console.log(typeof score); // DataType of Score is string.

let valueInNumber = Number(score) // String -> `number`
console.log(typeof valueInNumber); // Datatype Checked
console.log(valueInNumber);

// When we let a combination of number & String as String in JS, it does convert it into the desired datatype, but stores NaN as it's value.
// Try storing null, undefined, boolean 

let points = null
console.log(typeof points);

let valueInPoints = Number(points)
console.log(typeof valueInPoints);
console.log(valueInPoints);

// Similarly try converting to Boolean

let IsLoggedIn = 1
let ValueIsLoggedIn = Boolean(IsLoggedIn)
console.log(ValueIsLoggedIn);

// 1 -> true; 0 -> false
// "Priyanshu" -> true; "" -> false

// -------------------------------------------------------------------------------------------------------------------------------------------------

console.log(1+"2"); // 12
console.log("1"+2);  // 12
console.log("1"+"2"); // 12

// typeof(output) depends upon the preference of datatype during operations.
// If String is preferred, output datatype is string, else number.

console.log(1+2+"2"); // 32
console.log("1"+2+2); // 122

console.log(+true); // 1
console.log(+" "); // 0


console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

// Reason is that equality works differently than the basic comparison operators,
// null -> 0, hence 0>=0 is true, while 0>0 is false.

console.log(undefined>0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false

// === is a strict check, that compares values & it's datatype as well.

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Stack & Heap Memory in JS

/*
Primitives (Primitive Datatypes) are stored in Stack Memory.
Non-Primitives (Objects, Arrays, Functions) are stored in Heap Memory.
*/

let username = "Priyanshu" // Stored in Stack Memory
let anothername = username // A copy of username is created in anothername variable.

anothername = "Rohan" // Changing anothername doesn't affect username.
console.log(username);
console.log(anothername);

let userOne={
    email:"prianshu@gmail.com",
    upi:"prianshu@oksbi"
}
let userTwo = userOne; // Takes the reference of UserOne into UserTwo from the Heap Memory.

userTwo.email="rohan@google.com";

console.log(userOne.email);
console.log(userTwo.email);  

// -------------------------------------------------------------------------------------------------------------------------------------------------



