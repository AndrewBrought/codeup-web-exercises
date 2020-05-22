

// ECMA6 IIFE (()=>{})();
    (function(){

     const users = [
      {
       id: 1,
       name: 'ryan',
       email: 'ryan@codeup.com',
       languages: ['clojure', 'javascript'],
       yearsOfExperience: 5
      },
      {
       id: 2,
       name: 'luis',
       email: 'luis@codeup.com',
       languages: ['java', 'scala', 'php'],
       yearsOfExperience: 6
      },
      {
       id: 3,
       name: 'zach',
       email: 'zach@codeup.com',
       languages: ['javascript', 'bash'],
       yearsOfExperience: 7
      },
      {
       id: 4,
       name: 'fernando',
       email: 'fernando@codeup.com',
       languages: ['java', 'php', 'sql'],
       yearsOfExperience: 8
      },
      {
       id: 5,
       name: 'justin',
       email: 'justin@codeup.com',
       languages: ['html', 'css', 'javascript', 'php'],
       yearsOfExperience: 9
      }
     ];

   experiencedUsers = users.filter((user) => user.languages.length >= 3);
   console.log(experiencedUsers);

 let usersEmail = users.map((user) => `<li>${user.email}</li>`);
 console.log(usersEmail);

// let favoriteSum = favoriteNumbers.reduce((sum, num) => sum + num, 0);
let totalYears = users.reduce((sum, user) => sum + user.yearsOfExperience, 0);
console.log(totalYears);

let averageYears = totalYears / users.length;
console.log(averageYears);

 let longestEmail = users.reduce((longest, user) =>
    longest.email.length > user.email.length ? longest : user
 , {email: 0});
 console.log(longestEmail.email);


 let instructorsString = users.reduce((finalString, instructor) => `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()} `, "Your instructors are: ");
 console.log(instructorsString);




// ====BONUS ======
     let totalLanguages = users.reduce((sum, user) => sum + user.languages + ",", "");
     console.log("total Languages: " + totalLanguages);


     let newTL=totalLanguages.substring(0, totalLanguages.length-1).split(",");
     console.log(newTL);
     var unique = newTL.filter((v, i, a) => a.indexOf(v) === i);
     console.log(unique);








    })();