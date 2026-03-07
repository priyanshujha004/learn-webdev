// Objects can be created using Object Literals or Using the 'new' Keyword. The object created using literals do not form the 
// singlton while the object created using 'new' keyword forms the singleton.

Object.create // Object Constructor

const person1 ={
    name: "Priyanshu",
    age: 21,
    email : "priyanshujha971@gmail.com",
    contact : 9773753164,
}

// These objects are key-value pairs. Keys are also called properties. Each key itself is a string. Values can be of any datatype.
// Keys are implicitly converted to strings if not already.

// Accessing Object Properties
console.log(person1); // Prints the Entire Object
console.log("Type Of The Object is: ", typeof person1); // Type of Object is 'object'

// Dot Notation
console.log("Name : ", person1.name); // Accessing name property using Dot Notation
console.log("Age : ", person1.age); // Accessing age property using Dot Notation

// Bracket Notation
console.log("Email : ", person1['email']); // Accessing email property using Bracket Notation
console.log("Contact : ", person1['contact']); // Accessing contact property using Bracket Notation

// Some Keys cannot be accessed using Dot Notation, for example Symbols or keys with spaces or special characters.

const dob = Symbol('june2004');

const person2 = {
    name: "Priyanshu",
    age: 21,
    [dob] : "25 June 2004", // Using Symbol as Key, Can only be accessed using Bracket Notation
    "full address" : "Noida, UP", // Spaced Keys are always written in Quotes
    email : "priyanshujha971@gmail.com",
    contact : 9773753164,
}
console.log("DOB : ", person2[dob]); // Accessing dob property using Bracket Notation
console.log(person2['full address']) // Accessing spaced key using Bracket Notation & Quotes

// Concept of Object Freezing - Once an object is freezed, the values can't be modified or new properties cannot be added.

person1.name = "Priyanshu Jha";
// Object.freeze(person1);
person1.age = 22;
console.log(person1); // Name will be updated, Age will remain same as 21

// Functions 

person1.greeting1 = function(){
    console.log('Hello User');
}
console.log(person1.greeting1()); // Calling the greeting function

person1.greeting2 = function(){
    console.log(`Hello User, I am ${this.name}`); // 'This' Keyword refers to properties of the Current Objects
}
console.log(person1.greeting2()); // Calling the greeting function

// --------------------------------------------------------------------------------------------------------------------------------------------------

// Object Constructor (Singleton) 

const tinderUser = {}
tinderUser.name = "Priyanshu"
tinderUser.age = 21
tinderUser.isLoggedIn = false
console.log(tinderUser);

const RegularUser ={
    email : "priyanshujha971@gmail.com",
    username : {
        fullname : {
            first : "Priyanshu",
            last : "Jha"
        }
    }
}
console.log(RegularUser.username.fullname?.first); 

// Accessing Nested Object Properties 
// Optional Chaining Operator (?.) is used to avoid errors while accessing nested properties. If any property in the chain is undefined or null, it returns undefined instead of throwing an error.

// Merging Two Objects

const obj1 = {
    1 : 'a',
    2 : 'b'
}
const obj2 = {
    3 : 'c',
    4 : 'd'
}

// Method 1
const obj3 = {obj1,obj2}
console.log(obj3); // Merges obj1 & obj2 as separate objects inside obj3

// Method 2
// Merges obj1 & obj2 as source into an empty target object.
// If an empty target is absent, all sources are assigned to the first source object itself, which is called Target Object.
const obj4 = Object.assign({},obj1,obj2) 
console.log(obj4);

// Method 3
console.log(Object.assign(obj1, obj2)); // obj1 is modified to include properties of obj2

// Method 4
const obj5 = {...obj1,...obj2} // Merges obj1 & obj2 using Spread Operator
console.log(obj5);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// Data Retrieval from Database takes place as an array of objects. Each element of array is an object. 
const users = [
    {
        id : 1,
        email : "priyanshujha971@gmail.com"
    },
    {
        id : 2,
        email : "neelamjha612@gmail.com"
    },
    {
        id : 3,
        email : "abc@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // Returns an array of keys of the object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // Returns an array of [key, value] pairs of the object


// --------------------------------------------------------------------------------------------------------------------------------------------------

// Object Deconstructor 

const course = {
    courseName : "Data Science",
    courseFee : 599,
    courseInstructor : "Suresh"
}

// Default Way to access properties 
console.log(course.courseFee);

// Optimized Way to access properties using Object Deconstructor.
// This is the process to deconstruc the object course, while also renaming it's property courseFee to cost. We can also deconstruct multiple properties at once.
const {courseFee : cost} = course; 
console.log(cost);

// This de-constructor is also used in ReactJS to access props of a component.
// For example

const navbar = ({company}) => {
    
}
navbar(company = "Google"); // Passing an object with company as key and Google as value to the navbar function. The company property is deconstructed inside the function to access its value.

// --------------------------------------------------------------------------------------------------------------------------------------------------

// API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable integration between different systems, allowing them to work together and share data seamlessly. 
// They can be used for various purposes, such as accessing web services, retrieving data from databases, or interacting with hardware devices. APIs play a crucial role in modern software development, enabling developers to create powerful and interconnected applications.

// All APIs are recieved as JSON (JavaScript Object Notation) format, which is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. 
// It is based on a subset of the JavaScript Programming Language, and it is commonly used for transmitting data in web applications between a server and a client. JSON represents data as key-value pairs, where keys are strings and values can be of various types, including strings, numbers, arrays, objects, booleans, or null. 
// JSON is widely used in APIs because of its simplicity and compatibility with many programming languages.

const jsonData = {
    "name":"priyanshu",
    "age":21,
    "course":"CS",
};