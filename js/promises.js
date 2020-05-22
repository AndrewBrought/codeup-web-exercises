"use strict"



function userHistory(username, API_KEY) {
    var Key = fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {'Authorization': `token ${API_KEY}`}})

        Key.then(response => response.json())
            .then(jsonResponse => console.log(new Date(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at).toDateString()));
         //Practice talking through this
}
userHistory("AndrewBrought", GITHUB_API_KEY)



// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (value === 1000) {  // this math is like flipping a coin
//             resolve('You\'ll see this after 1 second');
//         } else if(value === 3000) {
//            resolve('You\'ll see this after 3 seconds');
//         } else{
//             reject('Your API request failed');
//         }
//     }, num);
// });
//
// function
