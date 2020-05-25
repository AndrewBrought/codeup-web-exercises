"use strict"



function userHistory(username, API_KEY) {
    var Key = fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {'Authorization': `token ${API_KEY}`}})

        Key.then(response => response.json())
            .then(jsonResponse => console.log(new Date(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at).toDateString()));
         //Practice talking through this
}
userHistory("AndrewBrought", GITHUB_API_KEY)


function wait(num) {

    setTimeout(() => {
        if (num === 1000) {  // this math is like flipping a coin
            console.log('You\'ll see this after 1 second');
        } else if (num === 3000) {
           console.log('You\'ll see this after 3 seconds');
        } else {
            console.error('Your API request failed');
        }
    }, num);
}
wait(3000);
// console.log(wait(1000));
