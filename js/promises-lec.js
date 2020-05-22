"use strict"

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */
//promises are a tool for handling asynchronus events in JS

//    Asynchronus code allows the call stack to continue while JS processes requests in the background
    //    some examples:
//    Callback functions
//    AJAX Requests
//    Promises
    //    A promise will be in one of three state:  Pending, resolved, or rejected
    //    fetch('https://api.github.com/users')
    //         .then(response => console.log(response))
    //         .catch -(error => console.log(error))

var pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon')
// return of fetch request is a promise object

//TODO: console log the results of the above Promise. What is the result?
console.log(pokemonPromise)

//TODO: add a method that runs if the Promise resolves successfully

// pokemonPromise.then(response => response .json()); //parsing the response as json
// pokemonPromise.then(response => console.log(response.json()));

// pokemonPromise.then(() => console.log("API Request Was Successful"))
//                 .catch(()=> console.log("API Request Failed"));

//TODO: add a method that runs if the Promise fails
//     .catch(error => console.log(error));
// promise chaining allows us to do more complex things with our data without having to make multiple requests
//TODO: In the callback function of the .then method, parse the response into JSON

// pokemonPromise.then((response) => response.json())
// // the return from this first function, is passed as a parameter in the second one
//     .then(jsonResponse => console.log(jsonResponse.results));

// pokemonPromise.then((response) => response.json())
//     // the return from this first function, is passed as a parameter in the second one
//     .then(jsonResponse => jsonResponse.results)
//     // .then(pokemonArray => pokemonArray.forEach(function(pokemon){
//     //     console.log(pokemon.name);
//     // }))
//     .then(pokemonArray => pokemonArray.forEach(pokemon => {
//         console.log(pokemon.name);
//     }))
//     // .then(pokemonArray => pokemonArray.forEach(pokemon => console.log(pokemon.name)));  //this is another way to write it
//     .catch(error => console.log(error))
/*********************************************
 *              CHAINING PROMISES
 ******************************************** */
// BONUS: Is there a way for us to clean up our code?
function jsonResponse(response){
    return response.json();
}
function listNames(array){
    array.forEach(element => console.log(element.name));
}
//
// pokemonPromise.then(jsonResponse)
//     .then(jsonResponse => jsonResponse.results)
//     .then(listNames)  //this is another way to write it
//     .catch(error => console.log(error))

fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(listNames)
    .catch(error => console.log(error));

// These functions are examples of how we can clean up our code

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API
// Making request to StarWars API
var starWarsAPI = fetch("https://swapi.dev/api/films/");
// console.log(starWarsAPI);

// TODO: Use Promise chaining to console log the json response

// Parse the response into json
// starWarsApi.then(response => response.json())
    // access the results property from the json Object
    // .then(jsonResponse => jsonResponse.results)
    // // iterate over the results array, and access title and id properties of each film
    // .then(resultsArray => resultsArray.forEach(film => {
    //     console.log(film.title + " " + film.episode_id);
    // }))
    // // This runs if fetch request fails
    // .catch(error => console.log(error));

    starWarsAPI.then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse.count));

// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {  // this math is like flipping a coin
            resolve('This is where the API data would be');
        } else {
            reject('Your API request failed');
        }
    }, 1500);
});

myPromise.then(response => console.log(response))
        .catch(error => console.log(error));

//fetch ('fromSomeURL') -> returns a Promise object

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions
// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.


// Promise.all([pokemonPromise, starWarsAPI])
//     .then(data => console.log(data[0].json()));
//     .then(data => console.log(data[1].json()));

Promise.race([pokemonPromise, starWarsAPI])
    .then(data => console.log(data));


// keys.js

// const GITHUB_API_KEY = " 'token here' "
// {
//     headers: {
//     'Authorization': `token ${GITHUB_API_KEY}`
// }})