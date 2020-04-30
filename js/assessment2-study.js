// wrap code in functions when possible
// keep things well-organized
// makes your code reusable
// gives more control over when to execute
"use strict";


function returnName(){
    return "Andrew";
}

// function returnGreeting() {
//     return "Hello " + returnName();
// }
// console.log(returnGreeting());

function returnGreeting(callBack) {    //callback is a function that gets called back in another function
    return "Hello " + callBack();
}
console.log(returnGreeting(returnName));

var someArray = [1, 2, 3];

// using anonymous function
function logEachElement(element){
    console.log(element);
}
//using named function
someArray.forEach(logEachElement);

//know the return value and type value
// someArray.forEach(function(element) {
//     console.log(element);
// });

// function doMath(callback, num1, num2){
//     return callback(num1, num2);
// }
function concatNums(num1, num2){
    return "" + num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function add(num1, num2) {  //employee
    return num1 + num2;
}

function doMath(callback, num1, num2){  //higher-order function (manager) - calls the 'add' function then assigns the values to the callback function

    return callback(num1, num2);
}

console.log(doMath(add, 2, 2));

console.log(doMath(concatNums, 2, 2));

console.log(doMath(multiply, 2, 2));

// .forEach()
//     .map()
//     .filter()
//     .reduce()


// Make a function named isSpace(letter) that returns if a character is a space character
//         function isSpace(char) {
//             // return isspace(char);
//             if()
//         }
//         console.log(isSpace('O'));
//         console.log(isSpace('A'));
//         console.log(isSpace(" "));

// Make a function named isZero(number)

// Make a function named notZero(input) that returns true if the input is not zero

// Write a function named lowerCase(string)

// Write a function named double(n) that returns a number times two

// Write a function named triple(n) that returns a number times 3

// Write a function named quadruple(n) that returns a number times 4

// Write a function named half(n) that returns 1/2 of the provided input

// Write a function named subtract(a, b) that returns a minus b

// Write a function named multiply(a, b) that returns the product of a times b

// Write a function named divide(a, b) that returns a divided by b

// Write a function named remainder(a, b) that returns the remainder after dividing a by b