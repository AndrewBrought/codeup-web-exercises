(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    person.first = "Andrew";
    person.last = "Brought";
    console.log(person.first);
    console.log(person.last);
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        // return "Hello from " + person.first + person.last + "!";
        return "Hello from " + this.first + this.last + "!";  //this refer's to the main object
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
// console.log(shoppers[i].name);
    // shoppers.discount = function (){
    //     return (this.amount - (this.amount * .12));
    // }
// ========DAVID's SOLUTION:
//     function discountChecker(shoppers){
//         shoppers.forEach(function(shopper) {
//             if( shopper.amount >= 200) {
//                 console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + " today.  They qualify for a 12% discount, and therefore have a final total of $" + (shopper.amount - (shopper.amount * .12)).toFixed(2) + ".");
//             } else{
//                 console.log(shopper.name + ", thank you for shopping with us today.  Your final total is $" + shopper.total.toFixed(2) + ". If you add " + (200 - shopper.total).toFixed(2) + ", you could save 12% on your purchase today.");
//             }
//         });
//     }
//     discountChecker();

    // shoppers.forEach(function (shopper){
    //     shopper.discount = function (){
    //         return (this.amount - (this.amount * .12));
    //     }
    //     if(shopper.amount < 200) {
    //         console.log(shopper.name + ", almost there!  However, $" + shopper.amount.toFixed(2) + " does not qualify for a discount. Your total is $" + shopper.amount.toFixed(2));
    //     }else if(shopper.amount > 200){
    //         console.log("Congratulations! Your total, $" + shopper.amount.toFixed(2) +  ", qualifies for our 12% discount!  Your new total is $" + (shopper.discount().toFixed(2)));
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {
    //         title: "Harry Potter",
    //         author: {
    //             firstName: "J.K.",
    //             lastName: "Rowling",
    //         }
    //     },
    //     {
    //         title: "Red Rising",
    //         author: {
    //             firstName: "Pierce",
    //             lastName: "Brown",
    //         }
    //     },
    //     {
    //         title: "Hunger Games",
    //         author: {
    //             firstName: "Suzanne",
    //             lastName: "Collins",
    //         }
    //     },
    //     {
    //         title: "Farenheit451",
    //         author: {
    //             firstName: "Ray",
    //             lastName: "Bradbury",
    //         }
    //     },
    //     {
    //         title: "A Christmas Carol",
    //         author: {
    //             firstName: "Charles",
    //             lastName: "Dickens",
    //         }
    //     },
    // ];

    // console.log(books[0].title); // "Harry Potter"
    // console.log(books[0].author.firstName); // "J.K"
    // console.log(books[0].author.lastName); // "Rowling"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // =====DAVID's SOLUTION:
    // function loggingBooks(books){
    //     for(var x = 0; x < books.length; x++){
    //         console.log("Book # " + (x + 1) + "\n" + "Book Title: " + books[x].title + "\n" + "Book Author: " + books[x].author.firstName + " " + books[x].author.lastName);
    //     }
    // }
    // loggingBooks();
    //ALTERNATE SOLUTION:
    // books.forEach(function (book, index) {
    // console.log("Book # " + (index + 1) + "\n" + "Book Title: " + book.title + "\n" + "Book Author: " + book.author.firstName + " " + book.author.lastName);
    // });

    //   MY SOLUTION:
// for(var i = 0; i < books.length; i += 1){
//     var x = i;
//     console.log("Book # " + [++x] + "\n" + books[i].title + "\n" + books[i].author.firstName + " " + books[i].author.lastName + "\n");
// }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



// ====DAVID's SOLUTION:
//     function createBook(title, fName, lName, arr) {
//     var newBook = {
//         title: title,
//         author: {
//             firstName: fName,
//             lastName: lName,
//         }
//     };
//     arr.push(newBook);
//     return arr;
//     }
//
//     createBook("How Learning Works", "Susan", "Ambrose", books);
//     loggingBooks(books); //This is from david's previous solution above this bonus
// })();


// =====MY SOLUTION:
//     function createBook(title, firstName, lastName){
//         var book ={};
//
//        //  book.title = title;
//        // book.author = {firstName, lastName};
//             return book = {title: title, author: {firstName, lastName}};
//     }
// console.log(createBook("Pride and Prejudice", "Jane", "Austin"));
//
//     console.log(books.push(createBook("Pride and Prejudice", "Jane", "Austin")));
//
//     function showBookInfo(object){
//         for(var i = 0; i < object.length; i += 1){
//             var x = i;
//             console.log("Book # " + [++x] + "\n" + object[i].title + "\n" + object[i].author.firstName + " " + object[i].author.lastName + "\n");
//         }
//     }
//     showBookInfo(createBook("Pride and Prejudice", "Jane", "Austin"));
//     showBookInfo(books);
//
})();
