// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("Hello,", i);
// }
// console.log("Loop finished.");

// let arg = process.argv; // Global Object in NodeJS which contains the command line arguments passed to the script.
// for(let idx=2; idx<arg.length; idx++){
//     console.log("Hello,",arg[idx]);
// }

// // Importing the math.js file to use its functions.
// const someValue = require('./math.js'); 
// console.log(someValue.sum(2,4)); // This will print the value exported from math.js file.
// console.log(someValue.sub(2,4)); 
// console.log(someValue.mul(2,4)); 
// console.log(someValue.div(2,4));

// const info = require("./fruits"); // Importing the fruits folder which will automatically import the index.js file in it.
// console.log(info);


// IMPORT KEYWORD CONCEPT

// Either we require or import

import {sum, sub, mul, div} from './math.js'; // Importing the math.js file to use its functions.
console.log(sum(2,4));
