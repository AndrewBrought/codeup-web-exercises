"use strict";

// alert("Hello from External JS!");
//
// var willContinue =  confirm("Will you continue?");
// console.log(willContinue);
//
// var favQuote = prompt("Please enter your favorite quote:");
// console.log(favQuote);
//
// var favNum = parseInt(prompt("Please enter a number:"));
// console.log(favNum + favNum);

console.log("Hello from external JavaScript")

alert("Welcome to my Website!");

var favColor = prompt('What is your favorite color?')
alert('Cool, ' + favColor + ' is my favorite color too!');

// Problem 1:

// var littleMermaidRentalDays = Number(prompt('How many days would you like to rent The Little Mermaid?'));
// var brotherBearRentalDays = Number(prompt('How many days would you like to rent Brother Bear?'));
// var herculesRentalDays = Number(prompt('How many days would you like to rent Hercules?'));
//
// var totalMovieDays = littleMermaidRentalDays + brotherBearRentalDays + herculesRentalDays;
// var priceOfSingleMoviePerDay = 3;
// alert('It is $3 to rent a single movie, per day.  You are renting ' + totalMovieDays + ' days worth of movies.');
// var totalPrice = priceOfSingleMoviePerDay * totalMovieDays;
// alert('Your total movie rental price is $' + totalPrice.toFixed(2));

// Problem 2:

// var googleHourlyRate = Number(prompt('What is your Google hourly rate?'));
// var amazonHourlyRate =  Number(prompt('What is your Amazon hourly rate?'));
// var facebookHourlyRate =  Number(prompt('What is your Facebook hourly rate?'));
//
// var googleTotalHours = Number(prompt('Thank you for your hard work here at Google! Please log your weekly total hours in numeric form:'));
// var amazonTotalHours = Number(prompt('Thank you for your hard work here at Amazon! Please log your weekly total hours in numeric form:'));
// var facebookTotalHours = Number(prompt('Thank you for your hard work here at Facebook! Please log your weekly total hours in numeric form:'));
//
// var totalHours = googleTotalHours + amazonTotalHours + facebookTotalHours;
//
// var googleWeeklyTotalDollars = googleHourlyRate * googleTotalHours;
// console.log(googleWeeklyTotalDollars);
//
// var amazonWeeklyTotalDollars = amazonHourlyRate * amazonTotalHours;
// console.log(amazonWeeklyTotalDollars);
//
// var facebookWeeklyTotalDollars = facebookHourlyRate * facebookTotalHours;
// console.log(facebookWeeklyTotalDollars);
//
// var weeklyTotalPayDollars = googleWeeklyTotalDollars + amazonWeeklyTotalDollars + facebookWeeklyTotalDollars;
// alert('Thank you for a great week and dedicated service!  You\'ve worked a total of ' + totalHours.toFixed(2) + 'hrs this week! Your weekly income is $' + weeklyTotalPayDollars + '. Have a great weekend!');
// console.log(weeklyTotalPayDollars);

// Problem 3:

var classScheduleNotFull = true;
var currentScheduleConflictFree = confirm('If your current schedule is open for this class, please continue, otherwise hit \"cancel\".');
var addStudent = Number(prompt("If you intend to register, please enter \'1\' (numerically) to add yourself."));
var totalStudents = 25;
var registered = 12;
var currentTotal = registered + addStudent;
var classNotFull =  totalStudents >= currentTotal;
console.log(classNotFull);
alert('Congratulations! You are the ' + currentTotal + 'th student. You are confirmed for class!');


// Problem 4:

var itemsPurchased = Number(prompt('How many items are you purchasing?'));
var offerNotExpired = true; 
var premiumMember = confirm('Are you a Premium Member?'); 
var productOffered = ((itemsPurchased > 2) || premiumMember) && offerNotExpired;

       if(productOffered) {
           alert('Congratulations! You qualify for our special product offer!');
    } else {
        alert('I am sorry, you do not qualify for out special product at this time.')
        confirm("Would you like to become a Premium Member?")
       }
// console.log(grantOffer);
