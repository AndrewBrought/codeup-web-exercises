"use strict";
//PROBLEM 5
var i = 1;
while (i < 65536) {
    // i = i * 2; //Should be the same
    i *= 2;
    console.log(i);
}

//------JUSTIN's SOLUTION (5)
// function displayDoubleTwo(){
//     var output = "";
//     var i = 2;
//     while (i <= 65536){
//         output += i + "\n";
//         i *= 2;
//     }
//     return output;
// }
// console.log(displayDoubleTwo());

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 100 - 50 + 1) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

var totalCones = allCones;
var purchase;
// var i = allCones;
    console.log("I have " + totalCones + " cones to sell today!");
   purchase = Math.floor(Math.random() * 5) + 1;
do {
    var newTotal = totalCones -= purchase; //the New total is my iterator
    console.log(purchase + ' cone(s) sold!');
    if(newTotal === 0){
        console.log("Yay! I sold them all!");
        break;
    } else if(newTotal - purchase < 0){
    console.log("I cannot sell you " + purchase + " cones, I only have " + newTotal + "...")
    continue;
    }
    console.log("I have " + newTotal + " cone(s) left!");

} while (newTotal > 0);

