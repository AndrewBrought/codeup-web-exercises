"use strict";

// =====SOME NOTES=====
// 1. say in words out loud or rewrite the problem in your own words
// 2. solve as a human (can you come up with example inputs and outputs on your own)
// 3. pseudo-code
// ex: write a function that takes in an input, produce an output that is a string of the table of numbers, for each line of the string I need to concatenate the input number with a math expression including a number from 1 - 10 and the output of the input times the number 1- 10...input num concat to "x" concat to (num 1-10) concat "=" concat result of input * (num 1-10)
// return the string output and console.log it

// 4. write out a solution in code


// ========================================
//PROBLEM 1
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

// function showMultiplicationTable(num){
//     for(var i = 1; i <= 10; i += 1) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }
// console.table(showMultiplicationTable(7));

//------JUSTIN's SOLUTION:
// This version is more realistic for application ...
// var output = "";
// function showMultiplicationTable(num){
//     for(var i = 1; i <= 10; i += 1) {
//        output += num + " x " + i + " = " + (num * i);
//        output += "\n";
//     }
//     return output;
// }
// console.table(showMultiplicationTable(7));

//PROBLEM 2
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
/*
123 is odd
80 is even
24 is even
199 is odd
...
 */

//  PROBLEM 2 WORK:
// for(var i = 0; i < 10; i++){
//     // var count = 0;
//     var random = Math.floor((Math.random()*200)+20);
//     // for (var j = 20; j < 50; j++) {
//     //
//     if(random % 2 === 0){
//         console.log(random + " is even");
//     } else {
//         console.log(random + ' is odd');
//     }
//     // count++;
// }

// PROBLEM 2 SOLUTION:
// for(var i = 0; i < 10; i++){
//     var random = Math.floor((Math.random()*200)+20);
//     if(random % 2 === 0){
//         console.log(random + " is even");
//     } else {
//         console.log(random + ' is odd');
//     }
// }

//------JUSTIN's SOLUTION (2):
// for (var i =1; i <= 10; i += 1) {
//     // console.log(i);
//    var random = Math.floor(Math.random() * (200 - 20 + 1) + 20); // you add 1 to include the 200
//     // is random even or odd?
//     var evenOddMessage = "";
//
//     if( random % 2 === 0){
//         evenOddMessage = " is even";
//     } else{
//         evenOddMessage = " is odd";
//     }
//     console.log(random + evenOddMessage);
// }
//------JUSTIN's SOLUTION (2) using combo of small Functions:
// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function isEven(num){
//     return num % 2 === 0;
// }
//
// function returnEvenOddMessage(isEven, num){
//     return isEven(num) ? num + " is even" : num + " is odd";
// }
//
// function displayRandomNumber(generateRandomNumber, isEven, returnEvenOddMessage, numberOfRandoms, min, max) {
//     var output = "";
//     var random;
//     for (var i = 1; i <= numberOfRandoms; i += 1){
//         random = generateRandomNumber(min, max);
//         output += returnEvenOddMessage(isEven, random);
//         output += "\n";
//     }
//     return output;
// }
// console.log(displayRandomNumber(generateRandomNumber, isEven, returnEvenOddMessage, 10 , 20, 200));


//PROBLEM 3
// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for(var i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }

// var output = "";
// for( i = 1; i <=9; i++) {
//     for(var j = 0; j < i; j++){
//         if(i === 9 && j === i-1) {
//             output += i
//         } else {
//             output += i + ", "
//         }
//     }
// }
// console.log(output)

// for( i = 1; i <= 9; i++) { // In this example we're running 'i'
//     for(var j = 0; j < i; j++){   //       'j' amount of times ... We set 'j' to run the same amount of times but offset the numbers to allow for them both to iterate the same amount of times without conflicting with each other...
//         if(i === 9 && j === i - 1) {
//             output += i
//         } else {
//             output += i + ", "
//         }
//     }
// }
// console.log(output)

// var i = 9;
// console.log(output += i + ', ');
//------JUSTIN's SOLUTION (3)
// for (var i = 1; i <= 9; i += 1){
//     var output = "";
//     for(var j = 1; j <= i; j+= 1){
//         output += i;
//     }
//     console.log(output);
// }
// function displayNumPyramid(){
//    var output = "";
//     for (var i = 1; i <= 9; i += 1){
//         output += i.toString().repeat(i) + "\n";
//     }
//    return output;
// }
// console.log(displayNumPyramid());
// for (var i = 1; i <= 9; i += 1){
//     console.log(i.toString().repeat(i));
// }
// for (var i = 1; i <= 9; i += 1){
//     console.log(("" + i).toString().repeat(i));
// }



//PROBLEM 4
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// for(var i = 100; i >= 5; i -= 5){
//     console.log(i);
// }
// //------JUSTIN's SOLUTION (4)
// function displayDecrease(max, min, jump){
//     var output = "";
//     for(var i = max; i >= min; i -= jump){
//         output += i + "\n";
//     }
//     return output;
// }
// console.log(displayDecrease(100, 5, 5));
//Important to remember when iterating by a different quantity to state:  i = i +/- quantity ...
// short hand is: i +/- = quantity



