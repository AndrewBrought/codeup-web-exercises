"use strict";

console.log("Hello, Andrew")

// function declaration

// function sayHello() {
//     console.log("Hello!"); // Avoid doing this when trying to return a value/ it will NOT work
// }
//
// // calling / invoking function
//
// sayHello();
//
// sayHello; // is a specific value or variable, not the function running

// return value

// function sayHello() {
//     // console.log("Hello");
//     return "Hello"; // returning a value defines the function and allows for it to be reused and manipulated
// }
// console.log(sayHello()); // without return keyword, the function will return undefined
//
// function calculateMortgage() {
//    //...
//     return 2 + 2;
// }
//
//
// calculateMortgage() //edit html
// //or
// calculateMortgage() // write to text file
// //or
// calculateMortgage() // store in DB
// //or
// calculateMortgage() // pass the value to another function

// console.log() // is meant for creating, testing and developing a program, not for running a program

// function sayHello() {
//     return "Hello";
//     console.log("Will this run?"); // This will not run
// }
// console.log(sayHello());

//function declaration syntax
// function sayHello() {
//     return "Hello";
// }
// console.log(sayHello); // This will return the definition of the function or the function write up...
//
// //if you set x = to the name say hello, it adopts the same principles of the function
//
// var x = sayHello; // Think of x as a function expression
//
// console.log(x()) // this will return the function NOT the definition BECAUSE of the ().
//
// // function expression syntax
//
// var  sayHello = function () {
//     return "Hello";
// };

// arguments vs parameters (function input)

function add(num1, num2) {  //ex num are parameters
    return num1 + num2;
}
// console.log(add(num1:2));  //This returns NaN because there is now an undefined variable which when added
                            // To a number returns NaN

// If you try to pass in more values than what are needed for the parameters, the function will ignore whatever is not needed


// function addTwo() {   //This is a parameter
//     return 2 + 2;
// }
//
// pure function
// function addTwo(num) {  // This takes in an argument
//     return num + 2;
// }

// function with side effects
// var num = 2; // global variable
//
// function addTwo() {   //This example is not as adaptable or easily testable as input
//     return num + 2;
// }

// ===== MINI PROBLEMS
// Write a function, returnFive, that returns the number five. No inputs should be defined.
// function returnFive() {
//     return 5;
// }
// console.log(returnFive());
// // Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// function isFive(input) {
//     return 5 === input || '5' === input;
//
// }
// console.log(isFive(7), false);
// console.log(isFive("5"), true);
// console.log(isFive(4), false);
//
// // Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord(string) {
//     return string.length < 5;
// }
// console.log(isShortWord("falsey"), false);
// console.log(isShortWord("Hi"), true);
// // Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// function isSameLength(strA, strB) {
//     return strA.length === strB.length;
// }
// console.log(isSameLength("happy", "sad"), false);
// console.log(isSameLength("bad", "sad"), true);
//
// // Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// function getSmallerSegment(string, num) {
//     return string.substr(0, num).toLowerCase();
//
// }
//
// console.log(getSmallerSegment("Hello", 4), "hell");
// console.log(getSmallerSegment("Codeup", 4), 'code');
// console.log(getSmallerSegment("Parallel", 4), 'para');
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// ======= SCOPE

// var keyword creates "Function Scope" variables
// var globalVar = "Look, I'm Global!";
// function scopeExample() {
//     // always declare variable at the top of a function
//     var localVar = "Look, I'm Local!";
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
//
//     // nestedFunction(); // would have access to both local and global varriables
// }
// console.log(globalVar);
// console.log(localVar); //wont run

// CALLBACK, ANONYMOUS, HIGHER ORDER FUNCTIONS...
// function returnFive() { -This is a CALLBACK fn
//     return 5;
// }
// //  fn is a generic name for function
// function addTwo(fn) { // Add two is considered a higher order function because it takes in another function as an argument
//     return fn() + 2;
// }
// console.log(addTwo(returnFive), "7"); // Callback function "returnFive" is passed to addTwo
//
// console.log(addTwo(function() {  //This is also passed through the addtwo function, called an anonymous function
//     return 10;
// }), "12");

//  IIFE - Imediately Invoked Function Expression

//Can create a giant wrapping function that all of our functions live in to prevent functions from colliding

//<script>
  // (functoin() {
    // "use strict";

  // .....
// ...everything is now a local variable
//}
//==================================
//Starts like this () ();
//Then write (function(){}();
//Then hit return to create space in-between the curly brackets
//   (function() {
//
//         statements
//
//     })();