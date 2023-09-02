const name = "siddhant"
const repoCount = 50

console.log(name + repoCount + "something");  //old way

// new way
console.log(`Hello, I am ${name} and my repo count is ${repoCount}`);



// try using this code in console
const gameName = new String('sidexe')
console.log(gameName);

// use console log and learn methods of string

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,4)  //even if we give any negative number in place of 0 it will start from 0
console.log(newString);

const anotherString = gameName.slice(-5,2)
console.log(anotherString);
