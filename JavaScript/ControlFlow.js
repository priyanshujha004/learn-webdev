const isUserLoggedIn = true;
if(isUserLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}

// Switch Statment

const month = 13;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 6:
        console.log("June");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

// If break statement is not written, it executes all statements once the condition is true, 
// except the default case.

// Truthy and Falsy Values

/* Values that are considered false in JavaScript: false,0,-0, BigInt 0n, "", null, undefined, NaN,
   Values that are considered true in JavaScript: true, "0", 'false', " ", any non-zero number, any non-empty string, {},[], function(){} */

const emptyObject = {};
if((Object.keys)(emptyObject).length ===0){ // Detecting Empty Object as Truthy Value
    console.log("Empty Object is Truthy");
}

// false == 0 is true 
// false == '' is true
// 0 == '' is true

// Nullish Coalescing Operator (??) : Null / Undefined Coalescing Operator
let val1;
val1 = 5??10;
val2 = null ?? 10;
val3 = undefined ?? 10;
val4 = 0 ?? 10;
val5 = "" ?? 10;
val6 = null ?? 10 ?? 15; 
console.log("Val1 : " + val1);
console.log("Val2 : " + val2);
console.log("Val3 : " + val3);
console.log("Val4 : " + val4);
console.log("Val5 : " + val5);
console.log("Val6 : " + val6);

// Ternary Operator (Conditional Operator) : condition ? true : false

const price = 99;
price>100 ? console.log("Expensive") : console.log("Affordable");

// Iterations 
let array = ["Hello","Priyanshu","Ramit"];
for (let index=0; index < array.length; index++){
    const element = array[index];
    console.log(element);
}

for(let i=0; i<10; i++){
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}
for(let i=0; i<10; i++){
    if(i==5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${i}`);
}

// While Syntax
let count = 0;
while(count<5){
    console.log(`Count is ${count}`);
    count++;
}

let myArray = ["Hello","Priyanshu","Ramit"];
let counter = 0;
while(counter < myArray.length){
    console.log(myArray[counter]);
    counter++;
}

// Do While Syntax
let ct = 1;
do{
    console.log(`Count is ${ct}`);
    ct++;
}while(ct<=5);

// // ---------------------------------------------------------------------------------------------------------------------------------------------------

// For-Of Loops For Iterating Over Arrays, Strings, Maps, Sets, etc. (Iterable Objects)

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Iterating Over The Object Using For...In Loops
const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'
}

for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`); // Accessing Key & Value Separtely
}

const pgm = ['java','cpp','js']
for(const key in pgm){
    console.log(key); // For-In Returns Key (here: index) of Array
    console.log(pgm[key]); // Returns Value of Array Using Index.
}

// Difference Between For-Of & For-In Loops In Array Iterations 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num); // For-Of Returns Value of Array
}

for(const num in arr){
    console.log(num); // For-In Returns Key (here: index) of Array
    console.log(arr[num]); // Returns Value of Array Using Index.
}

// // For-Each Loops ------------------------------------------------------------------------------------------------------------------------------------------------------------

const coding = ['java','cpp','js','py','ruby']

coding.forEach(function (item) {  // This function is callback function, hence it does not have it's name.
    console.log(item); // Returns Value of Array
})

coding.forEach((item)=> { // Callback Function Using Arrow Function Syntax
    console.log(item); // Returns Value of Array
})

function printMe(item){
    console.log(item); // Returns Value of Array
}
coding.forEach(printMe); // Callback Function Using Function Call

coding.forEach((item, index, arr)=>{ // Multiple Paramters in For-Each Loop
    console.log(item,index,arr);
})

// Trying To Return Value From For-Each Loop

const values = coding.forEach((item)=>{
    console.log(item); // Returns Value of Array
    return item; // forEach does not return anything, it returns undefined.
})
console.log(values);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
const myCode = [{  // Array of Objects Iteration Using For-Each Loop
    name:'js',
    type:'programming language'
    },
    {
    name:'python',
    type:'programming language'
    },
    {
    name:'java',
    type:'programming language'
    }
]

myCode.forEach((item,)=>{
    console.log(item.name);
    console.log(item.type);
})
// ----------------------------------------------------------------------------------------------------------------------------------------------------
