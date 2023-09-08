// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);  //here we created a new property hitesh and this hitesh function is available to array, string. Since everything is object. Object is at top hierarchy
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);  //here heyHitesh function is givent to Arrays and this function is only given to array and not string and object 
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //here we are linking TeachingSupport with TASupport //Basically inheritance
}

Teacher.__proto__ = User //connecting Teacher with User
//this is prototypal inheritance this is old syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//giving TeachingSupport access of Teacher property

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()