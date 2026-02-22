// const score = 99
// const balance = new Number(100)

// console.log(score);
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(score.toFixed(2)); // Converts Number to String with 2 Decimal Places

// const num = 1245.369;
// console.log(num.toPrecision(4)); // Converts Number to String with specified length

// const amount = 10000000;
// console.log(amount.toLocaleString('en-IN')); // Converts Number to String with Commas as per Locale

// --------------------------------------------------------------------------------------------------------------------------------------------------

console.log(Math); // Is an Objects

console.log(Math.abs(-5)); // Absolute Value

console.log(Math.round(4.6)); // Rounds to Nearest Integer
console.log(Math.ceil(4.2)); // Rounds Up to Nearest Integer
console.log(Math.floor(4.8)); // Rounds Down to Nearest Integer

console.log(Math.min(2,5,1,8,6));
console.log(Math.max(2,5,1,8,6));
 
console.log(Math.random()); // Random Number between 0 & 1 (Excluding 1)
console.log(Math.random()*10); // Random Number between 0 & 10 (Excluding 10)
console.log((Math.random()*100)+1); // Random Number between 1 & 100 (Including 100)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random Number between min & max (Including both)
