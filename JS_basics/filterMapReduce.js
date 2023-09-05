const coding = ["python", "javascript", "typescript", "cpp", "java"]

//for each does not return anything

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> num>4  //here we haven't define scope i.e. we haven't use {} as we have learnt in arrow function that
)                                            //  arrow function will return if they are definde in same line or define using ()=>() but if
                                             //  we use {} then we have to use return keyword

const newNums1 = myNums.filter((num)=>{
    return num>4
})

console.log(newNums);
console.log(newNums1);

// to get the same result using for each we have to use logic 

const newNumber= []

myNums.forEach((num)=>{
    if (num>4){
        newNumber.push(num)
    }
})

console.log(newNumber);

const bookDB = [
    {title:"Book1", genre:"science", edition:"2004"},
    {title:"Book2", genre:"history", edition:"2003"},
    {title:"Book3", genre:"fiction", edition:"2009"},
    {title:"Book4", genre:"selfhelp", edition:"1999"},
    {title:"Book5", genre:"science", edition:"2004"},
    {title:"Book6", genre:"fiction", edition:"2005"},
]


//practical use case of filter 
// suppose if user wants to add filter on online shopping to get only certain books

let userBooks = bookDB.filter((bk)=> bk.genre === "fiction")


console.log(userBooks);

// MAP

const myNumbers = [1,2,3,4,5,6,7,8,90]

// let newNum = myNumbers.map((num)=>{return num+10})
// CHAINING
let newNum = myNumbers.map( (num) => num*10)
                      .map((num)=> num + 1 )
                      .filter((num) => num>=40)
console.log(newNum);

// NOTE:- if we don't use return and we have used {} then in case of FILTERS we will get empty array and incase of MAP we will get array filled with undefined

// REDUCE

let cartValue = [1,2,3]

const total = cartValue.reduce((accumulator, currentValue)=>{
            console.log(`accumulator : ${accumulator} currVal: ${currentValue}`);
            return accumulator+currentValue
},0)

// at first iteration accum = 0 ad we have defined in next iteration accumulator value will be equal to the value that was return in previous iteration like 
//here in first iteration return value is 1 so in second iteration accum = 1

console.log(total);