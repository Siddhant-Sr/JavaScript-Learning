let myDate = new Date()

//month starts with 0 i.e January is 0 month and 01 is also january

//date is object type

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString("en-IN"));


let timeStamp = Date.now()
console.log(timeStamp);

console.log(Math.round(Date.now()/1000));