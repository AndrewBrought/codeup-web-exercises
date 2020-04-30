"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// these methods return the new length of an array
//modifies original array
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.

// returns 6
// console.log(numStrings.push('eight'));;
// // TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.
//
// // returns 7
// console.log(numStrings.unshift('two'));;
//
// // tells us that the original array has been modified
// console.log(numStrings);
// // TO DO: Use the .push method to add 'nine' and 'ten'.
//
// // console.log(numStrings.push('nine'));;
// // console.log(numStrings.push('ten'));;
//
// //can also push 'nine' and 'ten' together
// // numStrings.push('nine', 'ten');
// // TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
//
// // if you unshift 'zero' then unshift 'one' - one would get added to the beginning of the string to be before 'zero' instead of after.
//
// console.log(numStrings.unshift('zero', 'one'));
// // Console log your results.
// console.log(numStrings);
/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
//these methods return the element you are removing
//modifies original array

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// console.log(activeCohorts.pop());;
// var bayes = activeCohorts.pop();
// console.log(activeCohorts);
//
// // TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
// // console.log(activeCohorts.shift());;
// var deimos = activeCohorts.shift();
// console.log(activeCohorts);
// // TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
// // What do we get when we log the return of these methods?
// var graduatedCohorts = []
// graduatedCohorts.push(bayes,deimos);
// console.log(graduatedCohorts);
//
// // TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// console.log(activeCohorts);
// activeCohorts.pop();
// activeCohorts.shift();
// console.log(activeCohorts);
// left in the array. Log the updated array.


/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// these methods return a number representing the index of the element

// var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];
//
// // TO DO TOGETHER: Find the first index of 'apples' in the array
// console.log(fruit.indexOf('apples'));; //returns 0
//
// // TO DO TOGETHER: Find the last index of 'apples' in the array
// console.log(fruit.lastIndexOf('apples')); //returns 4
// // TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
// console.log(fruit);
// if(fruit.lastIndexOf('grapes') === fruit.length - 1){ //fruit[fruit.length - 1] will return string 'grapes'
//     fruit.pop();
//
// }
// // if we add another element like 'apples' to the end, then our if statement would not pass...so nothing would be popped off.
// // Console log your new array.
// console.log(fruit);

/* ***************************************************************
* 							SLICING
*************************************************************** */
//Allows us to copy a portion of our array
//slicing DOES NOT modify the original array, instead returns a new one
//using one parameter copies everything STARTING at that index, using 2 parameters specifies where we START and STOP *note the last index parameter is not included, the slice goes up TO.

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.
// var ganymedeInstructors = instructors.slice(0,3);
// console.log(ganymedeInstructors);
//
// //Different ways of slicing
// // var ganymedeInstructors = instructors.slice(0, instructors.length - 4);
// // var ganymedeInstructors = instructors.slice(0, instructors.indexOf('vivian'));
// // TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// // instructors starting from 'vivian' onward.
// var fortunaInstructors = instructors.slice(3);
// console.log(fortunaInstructors);
// console.log(instructors);

/* ***************************************************************
* 							REVERSING
*************************************************************** */
//This reverses the original array

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?
// console.log(instructors);

instructors.reverse();
console.log(instructors);


/* ***************************************************************
* 							SORTING
*************************************************************** */
// var myString = [5,6, 'one', 1,2,'3','4', true, false, '0'];
// // processes the array like ['5','6','one','1', '2', '3', '4']
// // returns ['1','2','3','4','5','6','one']
// myString.sort(); //converts numbers to string into string equivalent order to organize but spits back out them as numbers will also alphabetize the string of words including different value types. *NOTE Space is counted before 0 in a string.
// console.log(myString);

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.
// console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
//Splitting allows us to turn strings into arrays
//Joining allows us to turn an array into a string
//NOTE* "," is called a delimiter or space " "

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?

var submarineArr = submarine.split(' ')
console.log(submarine);
console.log(submarineArr);
// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.

//Join is similar to SPLIT
//a delimimter can be anything that evaluates to html
//  var newSubmarine = submarineArr.join("<br>"); //this would work in html... would be useful to get an element by its id and change the inner html to join them with a break
var newSubmarine = submarineArr.join('\n');
 console.log(newSubmarine);