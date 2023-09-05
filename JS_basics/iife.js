//Immediately Invoked Function Expression

// Global scope ke pollution se problem hoti hai kai baar to uss global scope ke problems ko hatane ke liye IIFE ka use krte hain
// JO function immediately execute ho jae


(function chai(){    //Named IIFE
    console.log('DB connected');
})();

// NOTE: here two ()() are used. First () is used to wrap the function inside it and second is used to execute the function
// AND here ; is mandatory because iife don't know when to stop the context so we need to end the function by using semicolon

( ()=> {    //unnamed IIFE
    console.log("I'm also working");
})();

( (name)=> {  //parameter IIFE
    console.log(`Hey there I am ${name}`);
})("siddhant");