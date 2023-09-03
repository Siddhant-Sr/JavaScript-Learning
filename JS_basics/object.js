// there two ways of declaring object : 1.constructor 2.Literals
// singelton: when made with constructor it will be singelton

//object literals
const mySym = Symbol("key1")
const mySym2 = Symbol("key1")

const Jsuser = {
    name: "Siddhant",
    age: 24,
    location: "Ballia",
    mySym: "use of symbol",
    [mySym2]: "use of symbol right way",
    email: "sidd@gmail.com",
    isLoggedIn: false,
    lsatLoginDays: ["Monday", "Saturday"],
    "full name": "Siddhant Srivastava"
    
}

// console.log(Jsuser["full name"])
// console.log(Jsuser["mySym"]);  //this is typeof string not symbol
// console.log(Jsuser[mySym2]);   //this is type of symbol nad right ways of using symbol


Jsuser.email = "siddhant@google.com"
// Object.freeze(Jsuser)  //freeze will not allow to any change further in the object passed inside the bracket
Jsuser.email = "-23@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hey there");
}

Jsuser.greetingTwo = function(){
    console.log(`Hey there, ${this.name}`);
}


// console.log(Jsuser.greeting);
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo);
// console.log(Jsuser.greetingTwo());


/// Constructor 

const tinderUser = new Object()   //it is a singelton object

tinderUser.id = 132
tinderUser.name = "SID"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "something@g.com",
    fullname: {
        userfullname: {
            firstname: "siddhant",
            lastname: "Srivastava"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1= { 1:"abc", 2: "cde"}
const obj2 = { 4:"xyz"}

// const obj3 = obj1 + obj2
const obj3 = Object.assign({}, obj1, obj2)  //{} it is optional parameter which is used as target object
const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));   // this will return all keys of tinderUser in an array 
console.log(Object.values(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//De structuring of object

const course = {
    coursename: "js in hindi",
    price: "999",
    instructor : "Hitesh"
}

const {instructor: ins}=course   //de-structuring
console.log(ins);


