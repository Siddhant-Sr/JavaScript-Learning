// different kind of elements can also be kept

// array makes shallow copy 

const myArr = [0,1,2,3,4,5]
// const heros = ["iron man", "thor", "hulk", "wanda"]

// const myArr2 = new Array(1,2,2,55,5)


// array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift();
// myArr.shift();

// console.log(myArr);

// const newArr =myArr.join();

// console.log(newArr);
// console.log(newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log("b", myArr);

const myn2=myArr.splice(1,3)
console.log("c", myArr);
console.log("myn1", myn1);
console.log("myn2", myn2);

// The slice() method can be used to create a copy of an array or return a portion of an array. 
// It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
// the splice() method will change the contents of the original array. 
// The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.







const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));