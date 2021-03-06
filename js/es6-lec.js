// "use strict"
// //
// // ((){})();
//
// //Variables are different
//
// var oldVariables = "jim";
//
// //ECMA6+
// let newVariables = "jim";
//
// //while an update to keyword to declare variables seems minor, it can have some long reaching benefits, namely, block scoping.
//
// // do {
// //     var password = prompt("What is the password?")
// //     if(password.toLowerCase() === "securepassword") {
// //         break;
// //     }
// // } while(true){
// // }
// // console.log(password);
// //
// //
// // do {
// //     let passcode = prompt("What's the password?");
// //     if(passcode.toLowerCase() === "bestpasscode"){
// //         break;
// //     }
// // }while (true);  // HERE, 'let' passcode only exists in the do loop.  Cannot be globally accessible, it scopes the variable within a code block
// //
// // console.log(passcode); //passcode will not make it here - it stays within code block...to do that you would have to declare "let" globally THEN define it within the code block
//
// //     for (var i = 0; i < 2; i++){
// //         console.log("Hello!");
// //     }
// //
// //     for (let i = 0; i < 2; i++) {
// //
// // }
// //
// //     function tyringAThing() {
// //         var bill = "Bill";
// //         return bill;
// // }
// //
// //         tyringAThing();
// //         console.log(bill);
//
//     //    "let" is more protected than var
//
//     //Notice that we're able to access the value of password, but not passcode. This allows us to keep a variable scoped to a block of code from being accessed globally.
//
//     //Also, we have const.  We touched on it before, but the benefits of having a const is that we can't change the value of our constants.
//
// const theAnswer = "42";
//
//     // theAnswer = "fishing"; //This will not be aloud "Uncaught Type Area
//
// // Constants can also be used as a collection.
//
//     const house = [{name: "Wilma", role: "Mother", gender: "F",}, {name: "Fred", role: "Father", gender: "M"}, {name: "Pebbles", role: "Daughter", gender: "F"}, {name: "Dino", role: "Pet", gender: "M"}];
//
//     house.push({name: "Bam Bam", role: "Son-In-Law", gender: "M"});  //Does not break.  We are not destroying and remaking the array, so we're not changing the value of house.  We're just adding to the array.
//
//     for(let person of house){  //This is saying for the entire array of house(let each object of the house array is now accessed)
//         console.log(person.name); // each individual object.name
//         if(person.gender === "F") {
//             console.log(person.name);
//         }
//     }
//
//     // While we can't change the value of an array or object declared as a constant, we can update, and add to them.
//
// // For/of loops are NOW a thing
//
// // We declared them like this
//
// // let iterable = [1, 2, 3, 4];
// // for(const geoff of iterable){
// //     console.log("The value of element during this iteration is: " + geoff + ".")
// // }
// // This would be much clearer if we used let
// // With each iteration of this loop we are re-defining a different variable
//
// for(var person of house) {
//     console.log(person.name + ' is the ' + person.role + ' of the family.');  //returns all the objects one at a time
//     console.log(`${person.name} is the ${person.role} of the family.`);  //returns all the objects one at a time using template strings
// }
//
// //   `` (backticks -from tilde key) template strings
//
// // document.getElementById("snarky-text").innerHTML = `<h2>HELLO FROM JAVASCRIPT, ${newVariables}!</h2>`
//
//     //Functions can be written faster now
//
//     function addTwoNumbers(n1, n2){
//         return n1 + n2;
//     }
//
//     console.log(addTwoNumbers(3, 4)); // returns the same
//
//     let add = (n1, n2) => n1 + n2;
//     console.log(add(3, 4)); //returns the same
//
//     // const hello = name => `Hello, ${name}`;
//     // console.log(hello("Andrew")); //This works because there is only one parameter
//
// const hello = name => {
//     name = `${name.substring(0,1).toUpperCase()}${name.substring(1,name.length).toLowerCase()}`
//     return `Hello, ${name}`;
// };
// console.log(hello("aNdRew")); // this will return "Hello, Andrew!"
//
// // IF there is a function with one line of logic, curly brackets and return are not needed
//
//     // const makeABasketballMan = (name) => {
//     //     return {name, heightInInches: 84}; //This WILL run because we need the braces to read an object {}
//     // }
//
// // const makeABasketballMan = name => {name, heightInInches: 84}; // this does NOT run
//
// // SUMMARY: With an arrow function, we don't need the function keyword, and we only need braces for our multiple line functions, and returning objects.
//
//  // ${} = has nothing to do with jquery... this is ECMA6 used only for template strings within ` `
//
// // Easy to establish key value pairs of objects with variables now
//
//     // var rid = riddles[Math.floor(Math.random() * 2)];
//
//     // let newKnight = {
//     //     name: kname,
//     //     quest,
//     //     canPass
//     // };
//
//     // before
//     // Math.pow(4, 2)
//
//     // Now
//     // 4 ** 2 // these equal the same thing...
//
// //
//
// //DAVID's NOTES:
// // "use strict";
//
// (() => {
//
//     /**
//      * "Hey David, what's an ECMA?"
//      */
//
//     // History time! JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Developed in 10 days, Mocha was created to help keep Netscape competitive with Microsoft's Internet Explorer. As time went on, the language has been maintained by two forces: Oracle (the current owners of JavaScript), and The European Computer Manufacturers' Association (ECMA). ECMAScript is a standardization of JavaScript. The first specification of ECMAScript came in 1997, and was updated yearly until ECMAScript 3. ECMAScript 4 was an abandoned update, with ECMAScript 5 coming out in 2009. The largest changes came in 2015 with ECMAScript 6, and since 2015, ECMA has regularly updated the language yearly, but with much more incremental changes.
//
//     /**
//      * "Neat, now what can I do with these updates?"
//      */
//
//         //Firstly, variables are a bit different.
//
//     var oldVariables = "jim";
//
//     let newVariables = "jim";
//
//     // While an update to the keyword to declare variables seems minor, it can have some long reaching benefits, namely, block scoping.
//
//     // do {
//     //     var password = prompt("What's the password?");
//     //     if(password.toLowerCase() === "securepassword") {
//     //         break;
//     //     }
//     // } while(true);
//     //
//     // console.log(password);
//
//     // do {
//     //     let passcode = prompt("What's the password?");
//     //     if(passcode.toLowerCase() === "bestpasscode") {
//     //         break;
//     //     }
//     // } while(true);
//
//     // console.log(passcode);
//
//     // for (let i = 0; i < 2; i++) {
//     //     console.log("Hello!");
//     // }
//     //
//     // for (let i = 0; i < 2; i++) {
//     //     console.log("Goodbye!");
//     // }
//
//     // Notice how I am able to access the value of password, but not passcode. This allows me to keep a variable scoped to a block of code from being accessed globally.
//
//     // Also, we have const. We touched on it before, but the benefits of having a const is that we can't change the value of our constants.
//
//     const theAnswer = 42;
//
//     // theAnswer = "Fishing";
//
//     // Constants can also be used as a collection.
//
//     const house = [{name: "Wilma", role: "Mother", gender: "F"}, {name: "Fred", role: "Father", gender: "M"}, {name: "Pebbles", role: "Daughter", gender: "F"}, {name: "Dino", role: "Pet", gender: "M"}];
//
//     house.push({name: "Bam Bam", role: "Son-In-Law", gender: "M"});
//
//     // for(let person of house) {
//     //     if (person.gender === "F") {
//     //         console.log(person.name);
//     //     }
//     // }
//
//     // While I cannot change the value of an array or object declared as a constant, I can update, and add to them.
//
//     // Let's roll back a second. For/Of loops are also now a thing.
//
//     // We declared them like so
//
//     // let iterable = [1,2,3,4];
//     // for(const geoff of iterable) {
//     //     console.log("The value of element during this iteration is: " + geoff + ".");
//     // }
//
//     // We can also use template strings now...
//
//     // for(var person of house) {
//     //     console.log(person.name + ' is the ' + person.role + ' of the family.');
//     // }
//     //
//     // for(let person of house) {
//     //     console.log(`${person.name} is the ${person.role} of the family.`);
//     // }
//
//     // document.getElementById("snarky-text").innerHTML = `<h2>HELLO FROM JAVASCRIPT, ${newVariables}!</h2>`;
//
//     // Functions can be written faster now.
//
//     function addTwoNumbers(n1,n2) {
//         return n1 + n2;
//     }
//
//     // console.log(addTwoNumbers(3, 4));
//
//     let add = (n1, n2) => n1 + n2;
//
//     // console.log(add(3, 4));
//
//     const hello = name => {
//         name = `${name.substring(0,1).toUpperCase()}${name.substring(1,name.length).toLowerCase()}`;
//         return `Hello, ${name}`;
//     };
//
//     // console.log(hello("daViD"));
//
//     // With an arrow function, we don't need the function keyword, and we only need braces for our multiple line functions, and returning objects.
//
//     const makeABasketballMan = (name) => {
//         return {name, heightInInches: 84};
//     };
//
//     // console.log(makeABasketballMan("Saul Tallman").name);
//
//     // Oh yeah, it's also easier to set the key value pairs of objects with variables now.
//
//     // Before:
//
//     var riddles = [
//         {prompt: "What is the air speed velocity of an unladen swallow?", ans: "What do you mean? African or European swallow?"},
//         {prompt: "What is your favorite color?", ans: "Blue"},
//         {prompt: "What is the capital of Assyria?", ans: "Assur"}
//     ];
//
//     var rid = riddles[Math.floor(Math.random() * 2)];
//
//     // var kName = prompt("What is your name?");
//     // var quest = prompt("What is your quest?");
//     // var canPass = prompt(rid.prompt).toLowerCase() === rid.ans.toLowerCase();
//
//     // var knight = {
//     //     name: kName,
//     //     quest: quest,
//     //     canPass: canPass
//     // };
//
//     // console.log(knight.name, knight.canPass);
//     //
//     // // Now
//     //
//     // let newKnight = {
//     //     name: kName,
//     //     quest,
//     //     canPass
//     // };
//
//     // console.log(newKnight.name, newKnight.canPass);
//
//     // We can also use object destructuring:
//
//     let rando = Math.floor(Math.random() * house.length);
//     let {name, role} = house[rando];
//
//     name = "Ymir";
//     // console.log(house[rando].name);
//     // console.log(name);
//     // console.log(role);
//
//     // Now I can get the name and role of an object from my house array, and have the properties declared as variables!
//
//     // Also, making exponents is easier now.
//
//     // Before
//     // console.log(Math.pow(4, 2));
//
//     // Now
//     // console.log(4 ** 2);
//
// //    Map will allow us to make a copy of an array where each element of an array is changed with a callback function.
//
//     let favoriteNumbers = [17, 22, 34, 4, 19];
//     let dubNums = favoriteNumbers.map((number) => {
//         return number * 2;
//     });
//     //  Every single element of the array is going to be changed by printing out a copy of the array after the function runs
//     console.log(dubNums);
//
// // This map function is an approximate representation of what the Array.prototype.map() method does.
// //     @param array
// //     @param callback
// //     @returns {Array}
//
//
//     function map(array, callback) {
//         let output = []; //empty bucket
//         for ( let i = 0; i < array.length; i += 1){
//             output.push(callback(array[i]));
//         }
//         return output;
//     }
//
//     console.log(map(favoriteNumbers, (number) => {
//         return number * 2;
//     }));
//
//     let evensAsTrue = favoriteNumbers.map((num) => {
//        if (num % 2 === 0){
//            return true;
//        } else{
//            return num;
//        }
//     });
//
//     console.log(evensAsTrue); // returns [17, true, true, true, 19];
//
// //    This filter function is an approximate representation of what the array.prototype .filter() method does
// //    @param array
// //    @param callback
// //    @returns {Array}
//
//     let oddFavorites = favoriteNumbers.filter((num) => num % 2 !== 0);
// //    return within a filter function needs to be a boolean value
//
//     console.log(oddFavorites);
//
//     function filter(array, callback){
//         let output = [];
//         for (let i = 0; i < array.length; i += 1){
//             if (callback(array[i])) {
//                 output.push(array[i]);
//             }
//         }
//         return output;
//     }
//
//
//     console.log(filter(favoriteNumbers, (num) => num % 2 !== 0));
//
//     // cheeses = cheeses.filter((cheese) => cheese.length <= 12);
//
//     // cheesesHTML = cheeses.filter((cheese) => cheese.length <= 12).map((cheese) => `<li>${cheese}</li>`);
//
// //    reduce allows us to take a collection and turn it into a single value
//
//     let favoriteSum = favoriteNumbers.reduce((sum, num) => sum + num, 0);
//     // sum has a STARTING value of 0
//
//
//     function reduce(array, callback, startingValue) {
//         let output = startingValue;
//         for (let i = 0; i < array.length; i +=1){
//             output = callback(output, array[i]);
//         }
//         return output;
//     }
//     console.log(reduce(favoriteNumbers, (sum, num) => sum + num, 0));
//
//
// //    filtering out cheeses that are greater than 12 in length of characters
// //    map all the remaining cheeses into li tags
// //    reduce into a string inside of a ul tag + the closing ul tag
//
//     // cheeseHTML = cheese.filter((cheese) => cheese.length <= 12).map((cheese) =>
//     // `<li>${cheese}</li>`).reduce((finalHTML ,li) => finalHTML + li, "<ul>") + "</ul>";
//
//     // let totalSales = salesPeople.reduce()
//
//
//
//
//
//
// })();
//
//
