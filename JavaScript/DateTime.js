// Date & Time in JS
let myDate = new Date()
console.log(myDate.toString()); // Full Date & Time
console.log(myDate.toDateString()); // Full Date Only
console.log(myDate.toLocaleString()); // Date & Time in Locale Format
console.log(typeof myDate); // Type of Date is Objects

// Custom Date Creation
let myCreatedDate = new Date(2023, 0, 23) // Declaring Date Using 0 Indexed Month
console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // Declaring Date with Hours & Minutes
// let myCreatedDate = new Date("2023-01-14") // Declaring Date Using String
// let myCreatedDate = new Date("01-14-2023") // Declaring Date Using String in MM-DD-YYYY Format


// Date Methods
let myTimeStamp = new Date() 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Timestamp in Milliseconds Since 1st Jan 1970
console.log(Math.floor(Date.now()/1000)); // Current Timestamp in Seconds Since 1st Jan 1970

// Date Functions / Methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// Modifiying The Date Format & Printing It
console.log(newDate.toLocaleString('default', {  // Since Date is an object, we may pass parameters in it, modifying it's output format.
    weekday: "long",  
}))