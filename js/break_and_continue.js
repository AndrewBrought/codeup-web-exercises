"use strict";



// var y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }

// var userInput = prompt("Please provide a number between 1 - 50: ");
// var willContinue = true;
// while (willContinue){
//    willContinue = !userInput;   // The use of ! immediately allows you to use current logic but flip relationship ... if we included the ! infront of the equals, we're now comparing values than setting them opposite eachother.  If willContinue = false to start with, the loop will never run while() must run true to run loop.
//     //while loop will only take comparison operators
// }


    var userInput;

while(isNaN(userInput) || userInput > 50 || userInput < 0 || userInput % 2 === 0 || userInput === undefined){
    userInput = prompt("Please provide an odd number between 1 - 50: ");
    if(userInput % 2 !== 0){
        break;
    }
}

// while(true) {
//     if(userInput === false || userInput > 50 || userInput < 0 || userInput % 2 === 0 || userInput === undefined){
//         continue;
//     } else if (userInput < 50 && userInput > 0 && userInput % 2 !== 0 || userInput === true) {
//         break;
//     }
// }

console.log('Number to skip is: ' + userInput);
// for (var i = 1; i < 50; i = i++) {
//         if (i % 2 === 0) {
//             continue;
//         }
//         if (parseFloat(userInput) === i) {
//             console.log('Yikes!! Skipping number: ' + i);
//         } else {
//             console.log('Here is an odd number: ' + i);
//         }
//         if (i >= 49) {
//             break;
//         }
//     }

for(var i = 1; i < 50; i += 2) {
    // if(i % 2 === 0){
    //     //  //This was creating an infinite loop
    //     // continue;
    // }
    if(i === parseFloat(userInput)){
        console.log("Yikes!! Skipping " + i)
       continue;
    }
    console.log(i);
}