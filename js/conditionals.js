"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//  function analyzeColor(colorName) {
//      if(colorName === "blue") {
//          return "Blue is the color of the sky";
//      } else if(colorName === "red") {
//          return "Strawberries are red";
//      } else if (colorName === "cyan") {
//          return "I don't know anything about cyan";
//      } else {
//          return "I am sorry, I wasn't listening...That color means nothing to me";
//      }
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("Green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

    // switch (color) {  // In this case, this is called the parameter
    //     case "blue":
    //         return "Blue like Kentucky bluegrass.";
    //         break; //break statement
    //     case "red":
    //         return "Strawberries are red";
    //         break;
    //     case "cyan":
    //         return "I don't know anything about cyan";
    //         break;
    //     default:
    //         return "I don't know anything about " + color;
    //         break;
    //
    // }


// The better approach here is to just set var = prompt... and throw that variable name into analyze() and console.log...
// In hindsight, this would have been MUCH easier and faster than re-writing the code.  WAKE uP!


// switch (prompt("Please share your favorite color with us").toLowerCase()) {
//     case "red":
//         alert("Apples are red too!");
//         break;
//     case "orange":
//         alert("Orange is also a fruit!");
//         break;
//     case "yellow":
//         alert("You were all yellow...");
//         break;
//     case "green":
//         alert("Green is the color of grass.");
//         break;
//     case "blue":
//         alert("Blue like Kentucky bluegrass.");
//         break;
//     case "indigo":
//         alert("Indigo, are you blue or are you purple? ... pick a lane!");
//         break;
//     case "violet":
//         alert("Violet is a weird name to say 20 times in a row");
//         break;
//     default:
//         alert("I am sorry, I don't care for that color.  Please try again.");
//         break;
// }



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorChoice = prompt("Please share your favorite color with us");

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber === 0){
        return "I am sorry, you do not qualify for a discount at this time.  Your total is $" + totalAmount.toFixed(2);
    } else if (luckyNumber === 1) {
        return "Congrats!  Your discounted total is $" + (totalAmount - (.1 * totalAmount)).toFixed(2);
        // return "Congrats!  Your discounted total is $" + (.9 * totalAmount).toFixed(2); Alternative way to write this is to multiple by the remaining %
    } else if(luckyNumber === 2) {
        return "Congrats!  Your discounted total is $" + (totalAmount - (.25 * totalAmount)).toFixed(2);
        // return "Congrats!  Your discounted total is $" + (.75 * totalAmount).toFixed(2); -Alternate
    } else if(luckyNumber === 3) {
        return "Congrats!  Your discounted total is $" + (totalAmount - (.35 * totalAmount)).toFixed(2);
        // return "Congrats!  Your discounted total is $" + (.65 * totalAmount).toFixed(2);  -Alternate
    } else if(luckyNumber === 4) {
        return "Congrats!  Your discounted total is $" + (totalAmount - (.5 * totalAmount)).toFixed(2);
        // return "Congrats!  Your discounted total is $" + (.5 * totalAmount).toFixed(2); -Alternate
    } else {
        // return "Congratulations!  Your purchase amount is $" + (1.0 * totalAmount).toFixed(2) + " It's on us!"; -Alternate
    }
}

console.log(calculateTotal(0,100), '$100');
console.log(calculateTotal(4,100), '$50');
console.log(calculateTotal(5,100), '$0');
console.log(calculateTotal(2,100), '$75');

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 6);

// var totalAmount = Number(prompt("Thank you for shopping with us!  What was your total bill today?"));
// alert("Your lucky number for the day is " + luckyNumber);
// alert("Your price before your discount is $" + totalAmount);
// alert(calculateTotal(luckyNumber, totalAmount) + " Thanks for shopping with us!");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var confirmation;
var userNumber;

// function thisIsNotANumber(userNumber) {
//     if(typeof userNumber === "string") {
//         return ;
//     }
// }

function evenOdd(userNumber) {
    if(userNumber % 2 === 0) {
        return userNumber + "," + " This number is even.";
    } else{
        return userNumber + "This number is odd.";
    }
}

function numPlusHundred(userNumber) {
    return " Also, your number " + "( " + userNumber + " )" + " " + " + 100 =  " + (userNumber + 100) + "!";
}

function positiveNegative(userNumber) {
    //Alternatively could've said :
    // if(userNumber > 0)
    if(Math.sign(userNumber) === 1) {
        return " Finally, your number is positive. Thanks for stopping by!";
    } else {
        return " Finally, your number is negative. Thanks for stopping by!";
    }
}

// confirmation = confirm("Would you like to enter a number?")

// userNumber = Number(prompt("Please enter a number:"));

// DAVID'S SOLUTION =======
// This works but since he returned alerts, you would need to refactor your returns in the individual functions:

// BIG TAKE AWAY is that we needed to use isNaN to determine whether or not this was a string or number.

function numberGame() {
    if(confirm("Would you like to play a game with me?")) {
        var userNum = parseFloat(prompt("Gimme a number."));
        if (!isNan(userNum)) {  //This is allowing the alerts to pass after determining that the userNum is a number...
            alert(evenOdd(userNum));
            alert(userNum + " plus 100 is equal to: " + numPlusHundred(userNum));
            alert(positiveNegative(userNum));
        } else {
            alert("You're no fun..."); //This is running if the User says 'cancel' to the 'Confirm' message.
        }
    } else {
        alert("You're no fun..."); //This is run if userNum is not a number
    }
}

numberGame();


// ==== MY SOLUTION =====

// function numberCheck() {
//     if(confirm("Would you like to enter a number?") !== true) {
//         return "Thanks for stopping by!";
//     } else if (isNaN(userNumber = Number(prompt("Please enter a number:")))) {
//         return "This is not a number!";
//     } else {
//     return evenOdd(userNumber) + " " + numPlusHundred(userNumber) + " " + positiveNegative(userNumber);
//     }
// }
// alert(numberCheck(userNumber));

// Problem I ran into here was trying to return multiple individual functions...Originally, I had the
// functions listed underneath the last 'else' without a trigger of any sort...took me awhile to find a way around
// returning all at the same time in the same alert.  This solution works well for what I was looking for!!
// Patience is a virtue!







