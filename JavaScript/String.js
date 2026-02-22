const name = "Priyanshu";
const age = 21;
console.log(`My name is ${name} and my age is ${age}`); // Template Literals / Template Strings

// -------------------------------------------------------------------------------------------------------------------------------------------------

const newName = new String('Priyanshu-Jha-971');
console.log(newName); // String Objects

// -------------------------------------------------------------------------------------------------------------------------------------------------

console.log(name.length); // Length of Strings
console.log(name.charAt(0)); // Character at Index 0
console.log(name.indexOf('y')); // Index of Character 'y'
console.log(name.endsWith('shu')); // Check if String ends with 'shu'
console.log(name.includes('janshu')); // Check if String includes 'janshu'
console.log(name.toUpperCase()); // Convert String to Uppercase
console.log(name.toLowerCase()); // Convert String to Lowercase
console.log(name.split('-')); // Split String into Array of Characters for Strings Only & Not String Objects.
console.log(name.replace('Priyanshu', 'Priya')); // Replace 'Priyanshu' with 'Priya'

// Refer to MDM Web Docs for more String Methods.