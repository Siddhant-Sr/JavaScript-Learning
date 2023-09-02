// there are two data types in js 1. Primitive data type  2. Non primitive
// The above categorisation is done on the basis of how the data is stored in memory and how data can be retrieved

// Dynamically type or Static type
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they 
// hold at runtime and can change throughout the program as we assign different values to them.


// Primitive:
// 7 types : String , Number, Boolean, null, underdefined, Symbol, BigInt

const score= 200
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // here typeof outsideTemp will give object 

const id = Symbol('123')
const anotherId = Symbol('123')

const bigint = 63453464534687791917n //n in the end convert int to bigInt

// console.log(id === anotherId);

// Non primitive or reference
// Array, objects, functions

// all the non primitive data types return typeOf object & function typeof returns function object

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"Siddhant",
    age:"23"
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction);