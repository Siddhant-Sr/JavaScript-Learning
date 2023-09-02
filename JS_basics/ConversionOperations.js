// let score = undefined

// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1


// let isLoggedIn = "0"
// let boolisLogged = Boolean(isLoggedIn)
// console.log(boolisLogged);

console.log("1"+2);   //12
console.log(1+"2");  //12
console.log("1"+2+2);  //122
console.log(1+2+"2");  //32
console.log(1+"2"+2);  //122

// agar string first element hai to pure ko string ki tarah treat krenge aur 
//agar last element string hai tb pehle ke sb elements pr operation apply ho jaega

console.log(+true); //convert true to number => 1
console.log(+"");  // convert empty string to number i.e. => 0

console.log("2">1);  //true
console.log("02">1);  //true


console.log(null>0);    //false
console.log(null==0);   //false
console.log(null>=0);  //true

// the reason for above 3 line code is that an equality check == and comparisons > < >= <= works differently.
//Comparision converts null to a number, treating it as 0
// that's why (3) null>=0 is true and (1) null>0 is false

console.log(undefined==0);  //false

//strict check ===

console.log("2"=== 2); //checks datatypes also