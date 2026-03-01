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