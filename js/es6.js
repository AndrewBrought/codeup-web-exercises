/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];
console.log(users);

// TODO: fill in your name and email and add some programming languages you know
// users.push({name: 'Andrew', email: 'AndrewBrought@gmail.com', languages: ['html', 'css', 'javascript']});
// console.log(users);
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Andrew';
const email = 'AndrewBrought@gmail.com';
const languages = ['html', 'css', 'javascript'];


// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

  users.push({
    name,
    email,
    languages
  });


// TODO: replace `var` with `let` in the following variable declarations
let emails = ['test@test.test'];
let names = ['test'];

// TODO: rewrite the following using arrow functions
// for(let user of users) {
//   let addEmail = (user) => emails.push(user.email);
// }

//Should have been:
users.forEach(user => emails.push(user.email));

// users.forEach(function(user) {
//   return names.push(user.name);
// });

//Should have been:
users.forEach(user => names.push(user.name));

// for(let user of users){
//   let addName = (user) => names.push(user.name);
// }


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(user => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;
});

  users.forEach(({name, email, languages}) => { //Destructured user object
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition



    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    developers.push(`${name}'s email is ${email} ${name} ' knows ' ${languages.join(", ")}.`);
  });
console.log(developers);


// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//   list += '<li>' + developer + '</li>';
//   list += '</ul>';
// });

  for(let developer of developers){
    list += `<li> ${developer} </li>`;
  console.log(developers);
  }
  // TODO: rewrite the assignment below to use template strings
list += '</ul>';

  let holdThis = document.getElementsByTagName("body")[0].innerHTML;

  document.getElementsByTagName("body")[0].innerHTML = holdThis + list;



