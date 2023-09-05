//  for of
const rr = [1,2,3,4,5]
for (const num in rr) {
    console.log(rr[num]);
}

// for of
const greet  = "Hello world"
for (const iterator of greet) {
    console.log(`Each char is ${iterator}`);
}


//MAP
const map = new Map()
map.set('IN', 'India')
map.set("US", "United states of america")
console.log(map);
// for (const key of map) {
//     console.log(key);
// }
// arrow destructuring to get every value instead of array of each pair
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//we can not use for of loop in object: error object is not iterable.
// there are diffrent way of iterating object by using for in loop

myobject = {
    cpp: "c++",
    py: "python",
    js: "javascript"
}
for (const key in myobject) {
    console.log(key, myobject[key]);
}


//For each
const coding = ["python", "javascript", "typescript", "cpp", "java"]
// coding.forEach((value)=>{
//     console.log(value)
// })
// coding.forEach(printMe)
// function printMe(item){
//     console.log(item);
// }
//for each have 3 params
coding.forEach((value,index, arrayList)=>{
    console.log(value,index,arrayList)
})


//iterating through array of object

const codingLang = [
    {
        code: "py",
        language: "Python"
    },
    {
        code: "cpp",
        language: "c plus plus"
    },
    {
        code: "js",
        language: "JavaScript"
    }

]

codingLang.forEach((item)=>{
        console.log(item.code, item.language);
})