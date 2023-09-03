const score = 400

// how to explicitly define a variable to store number

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));

const otherNumber = 23.89561  //24
const otherNumber1 = 123.89561 //124
const otherNumber2 = 1123.89561 //1.12e+3

console.log(otherNumber.toPrecision(3));
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));


const hundreds =100000000
console.log(hundreds.toLocaleString('en-IN'));

//MATHS

console.log(Math.random());

// random gives value b/w 0 & 1. lets suppose we want random number b/w 10 & 20
// FORMULA

const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min +1)) +min );