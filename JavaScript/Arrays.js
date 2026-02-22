const arr = [1,2,3,4,5,6];
console.log(arr);
console.log(typeof arr); // Type Of Array is Object
console.log(arr.length); // Length of Array

// Array Methods  
console.log(arr[1]);
console.log(arr['1']);
console.log(arr['01']); // Undefined, as there is no index 01

// 1 & '1' both point to the same index in arrays as index is implicity converted to string. 

arr.push(6) // Adds element at the end
arr.pop() // Removes element from the end

arr.unshift(9) // Adds element at the beginning
arr.shift() // Removes element from the beginning

console.log(arr.includes(9)); // Returns Boolean 
console.log(arr.indexOf(3)); // Returns Index of Element, -1 if not found
console.log(arr.reverse()); // Reverses the Arrays

const newArr = arr.join() // Converts Array to String
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3) // Does not modify the original array, returns a new array from start index to end index-1

console.log(myn1);
console.log("B ", arr); 


const myn2 = arr.splice(1, 3) // Modifies the original array, removes elements from start index, number of elements to remove
console.log("C ", arr);
console.log(myn2);

// --------------------------------------------------------------------------------------------------------------------------------------------------

const n1 = [1,2,3,4];
const n2 = [5,6,7];

console.log(n1.push(n2)); // Adds n2 as a single element at the end of n1.
console.log(n1); 

const n3 = n1.concat(n2); // Merges n1 & n2 and returns a new array
console.log(n1); // n1 remains unchanged
console.log(n3); // n3 is the merged array

const n4 = [...n1,...n2]; // Spread Operator to merge arrays
console.log(n4);
console.log([...n1,...n2]);

const n5 = [1,2,3,4,[5,6,7],7,[8,9,[10,11,[12,13]]]];
console.log(n5.flat(Infinity)); // Flattens the array to the specified depth, Infinity flattens all levels


// Sometime we need to check if the given object is an array or not. We may then convert it into an array using Array.from() method.

console.log(Array.isArray("Priyanshu")); // Returns false
console.log(Array.from("Priyanshu")); // Converts String to Array of Characters

console.log(Array.from({name:"Priyanshu"})); // Returns an empty array because it is unaware of converting arrays from keys or values.

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3)); // Creates an array from the given arguments
// Output: [100, 200, 300]