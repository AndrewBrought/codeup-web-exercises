"use strict";

var i = 1;
while (i < 65536) {
    // i = i * 2; //Should be the same
    i *= 2;
    console.log(i);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

var totalCones = allCones;
var purchase;
// var i = allCones;
    console.log("I have " + totalCones + " cones to sell today!");
do {
   purchase = Math.floor(Math.random() * 5) + 1;
    var newTotal = totalCones -= purchase; //the New total is my iterator
    console.log(purchase + ' cones sold!');
    if(newTotal === 0){
        console.log("Yay! I sold them all!");
        break;
    } else if(newTotal - purchase < 0){
    console.log("I cannot sell you " + purchase + " cones, I only have " + newTotal + " ...")
    break;
    }
    console.log(newTotal + " cones left!");

} while (newTotal > 0);

