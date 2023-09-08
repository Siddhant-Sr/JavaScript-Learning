//JavaScipt is primarily prototype based language
//OOP is just a programming paradigm
//Object is collection of properties and methods
//part of oop
//object literal means litterlay object


const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); //this represents current context 
     //eg if we talk about monday then we need to give context of week that we are talking about previous weeks monday or this week's monday

    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);  //here we will get {} in node environment in browser console we will get window object


function User(username, loginCount, isLoggedIn){
    this.username = username; //this.username is just a variable and username is argument
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

//constructor function :- new keyword => new key word gives new instance
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //reference to itself
//console.log(userTwo);

//About new keyword