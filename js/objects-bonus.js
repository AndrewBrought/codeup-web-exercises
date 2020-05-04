// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

function makeCar(make, model){

    return {make: make, model: model};
}

console.log(makeCar("VW", "Beetle"));

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup

// var salesReport = [
//     {
//         title:
//         date:
//         office:
//         employees: {
//             employee-number:
//             first-name:
//             last-name:
//             sales-unit:
//         }
//     },
// ];