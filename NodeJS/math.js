export const sum = (a,b) => a+b;
export const sub = (a,b) => a-b;
export const mul = (a,b) => a*b;
export const div = (a,b) => a/b;

// OR

// module.exports.sum = (a,b) => a+b;
// module.exports.sub = (a,b) => a-b;
// module.exports.mul = (a,b) => a*b;
// module.exports.div = (a,b) => a/b;

// Exporting the functions so that they can be used in other files. By default exports empty objects.
// But it can be string, number, objects etc.

// module.exports = 123;

// let obj = {
//     sum: sum,
//     sub: sub,
//     mul: mul,
//     div: div
// }
// module.exports = obj;