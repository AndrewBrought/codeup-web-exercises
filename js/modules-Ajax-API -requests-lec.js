"use strict"


// ================================= MODULES NOTES
// -- intro --
// Levels of English abstraction...
//  low level - high level
// Letters
// Words
// Phrases
// Sentences
// Paragraphs
// Sections
// Chapters
// Works (essays, articles, books, etc.)



// Levels of JS code abstraction...

// Syntax (operators, datatypes, keywords, etc.)
// Expressions / Statements
// Functions
// Objects/Classes
// Modules (files) separate js files that get bundled together with webpack
// Directories
// Libraries


// Import vs. Require...pick one approach and use it consistently within a project.

// Import is used when working with front end dev. - React

// node.js development is more on the server side - uses require

//     require - often used with server-side JS. Not supported natively client-side (in the browser)
//     import - often used in front-end JS. Part of the ES6 spec but not yet supported natively by browsers



// -- when to break code out into a module --

// ** NASA suggests you limit your functions to no more than 60 lines... POINT try to limit size of functions for clarity

//     - If you can imagine dropping it into another project, put it in a module!
//     - If too many related functions are cluttering up your index.js, put them in a module!
//     - If you have sensitive data that may be ignored by version control, put it in a module! **Think Keys.js (include in .gitignore)


//     -- best practice

// - use dash-separated (spinal-case) module names
// https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
//    - keep imports/requires at the top of your JS files
//    - don't have to include js file extension
//    - must start path to file with './'  ** means "we're starting in this current directory"
//     hackernoon.comhackernoon.com
//         [es6] import, export, default cheatsheet | Hacker Noon(83 kB)

//==========================

//Everything that we're going to access needs to be referred to in our index.js file

// EXAMPLE:   We create a file called hello-world.js  with code const hello = "hello World;

// for require:  at the end of the file we would include  module.exports = hello;
// then on the other side (index.js) we use require to assign the file: const hello = require('./hello-world');  Then npm run build
//  **In order to not have to run npm build every time we can add "watch"...in pkg.json under "scripts", add "start": "webpack --watch --mode=development"
// npm run start  ** This initiates the watch option

//In the same helllo-world.js file we can add another value: const bye = "Bye World";  to get the added value to run need to package them in an object, ex:  const exportObject = {
//hello: hello,
// bye: bye
// }


// In the index.js: const exportO = require ('./hello-world');
//                 console.log(exportO.hello, exportO.bye);

// Buuuut to clean up the hello-world file using ES6 we can write it simpler:   module.exports = {hello, bye};  ** runs the same

// to clean the call in Index.js up with destructuring: const { hello, bye } = require('./hello-world');
//                                                       console.log(hello);
//                                                      console.log(bye);

// hello-world.js :  const sayHi = () => 'hi';
// module.exports = {hello, bye, sayHi}

//==================  IMPORTS  =================

// hello-world-import.js : export: const hello = 'Hello World';
//                         export: const bye = "Bye World";
//                         export: const sayHi = () =>  "hi"'

// import {hello, bye, sayHi} from './hello-world-import';

// if you have a single const, variable, function you can use export default:
//     and then use import + the single value = require('')







