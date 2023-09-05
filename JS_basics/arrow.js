const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); //here this is the user object
    }
}

// user.welcomeMessage()
// user.username = "siddhant"
// user.welcomeMessage()

// console.log(this);   //here this is {} but when we log this in browser we get window object



// Arrow function

// function chai(){
//     console.log(this);
//     
// }

// chai()


// function chai(){
//     let username="sid"
//     console.log(this);
//     console.log(this.username);
//     // we cannot use this inside a function
// }

// chai()

// const chai = () => {
//     let username = "Siddhant"
//     console.log(this);   //we will get {}
// }

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1, num2) => (num1+num2) //here we don't have to use return keyword

// when we will use {} in function we have to use return keyword 

// returning a object from function

const retunObject = () => ({username: "siddhant"}) //here we have to use () otherwise it will not work and will give undefined
