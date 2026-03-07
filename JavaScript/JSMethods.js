// Maps() is an object that holds key-value pair and resembles the original insertion order.
// Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');

// console.log(map);

for(const key of map){
    console.log(key); // Gets array of key-value pair.
}

for(const [key, value] of map){ // Map Destructuring to get key and value separately.
    console.log(key, value); 
}

for(const key in map){
    console.log(key); // Does not work as map is not an object. It is an iterable. We can use for...of loop to iterate over it.
}

// -------------------------------------------------------------------

// Retrival Using Filter V/s For-Each

const myNums =  [1, 2, 3, 4, 5,6,7,8,9,10]
const numValue1 = myNums.filter((num1)=>{
    return num1>4;
})

const numValue2 = []
myNums.forEach((num2)=>{
    if(num2 > 4){
        numValue2.push(num2)
    }
})
console.log(numValue1);
console.log(numValue2);

// Filter Explanation Using Library Books 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk)=>{
    // return (bk.genre==='Fiction')
    return bk.publish>=1995 && bk.genre=='History'
})
console.log(userBooks);


// Maps in Javascript ----------------------------------------------------------
const myNum1 = [1,2,3,4,5,6,7,8,9,10];
const newNums1 = myNum1.map((num1)=>{
    return num1+10
})
console.log(newNums1)

const myNum2 = []
const newNums2 = myNum1.forEach((num2)=>{
    myNum2.push(num2+10);
})
console.log(myNum2);


// Chaining of Map & Filters Method
const newNums3 = myNum1
                .map((num)=> num*10)
                .map((num)=> num + 1)
                .filter((num)=>num>=40)
console.log(newNums3)

// -------------------------------------------

// Reduce Functions

const nums = [1,2,3,4]
const mytotal1 = nums.reduce(function(acc,currVal){
    console.log(`Accumulator : ${acc}, Current Value : ${currVal}`)
    return acc + currVal;
}, 0)
console.log(`Sum : ${mytotal1}`);

const mytotal2 = nums.reduce((acc,currValue)=>currValue+acc,0)
console.log(`Sum : ${mytotal2}`)


const shoppingCart = [
    {
        item:'ds/nlp',
        price:5999
    },
    {
        item:'python bootcamp',
        price:1299,
    },
    {
        item:'stats',
        price:299
    }
]
const mytotal3 = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(`Total Cost : ${mytotal3}`)