"use strict";

// var day = Math.floor(Math.random() * 7) + 1;
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//
// var n = weekday[d.getDay()];

// ====

// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6]= "Saturday";
//
// console.log(i);
// // var newDay = weekday[i.getDay()];
//
// function newDay(weekday){
//     console.log([i.getDay()]);
// }
// console.log(newDay(weekday));

// Solution for random day
var month = Math.floor(Math.random() * 12) + 1;
var day = Math.floor(Math.random() * 7) + 1;

var d = new Date(2020, month, day);
console.log(d);
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(' ');
var check = alphabet.indexOf(char.toLowerCase()) + 1;

console.log(check);