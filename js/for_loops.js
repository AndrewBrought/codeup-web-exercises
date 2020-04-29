"use strict";

function showmultiplicationTable(num){
    for(var i = 1; i <= 10; i += 1) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
console.log(showmultiplicationTable(7));


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


for(var i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}

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




for(var i = 100; i >= 5; i -= 5){
    console.log(i);
}
//Important to remember when iterating by a different quantity to state:  i = i +/- quantity ...
// short hand is: i +/- = quantity



