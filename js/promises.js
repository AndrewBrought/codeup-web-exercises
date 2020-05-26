"use strict"



function userHistory(username, API_KEY) {
    var Key = fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {'Authorization': `token ${API_KEY}`}})

        Key.then(response => response.json())

            .then(jsonResponse => console.log(new Date(jsonResponse.filter(user => user.type === "PushEvent")[0].created_at).toDateString()));
         //Practice talking through this
}
userHistory("AndrewBrought", GITHUB_API_KEY)


// function wait(num) {
//
//     setTimeout(() => {
//         if (num === 1000) {  // this math is like flipping a coin
//             console.log('You\'ll see this after 1 second');
//         } else if (num === 3000) {
//            console.log('You\'ll see this after 3 seconds');
//         } else if (num === 2000){
//             console.log('Two is the loneliest number since the number one...You\'ll see this after 2 seconds');
//         }else{
//             console.error('Your API request failed');
//         }
//     }, num);
// }


function wait(num) {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
            if (Number.isInteger(num/1000)) {  // this math is like flipping a coin
                resolve("You'll see this after " + num/1000 + " second(s).");
            } else {
                reject(num + " is not a millisecond. Promise rejected!");
            }
        }, num);
    })
}


wait(1000).then(message => console.log(message));
wait(3).catch(message => console.log(message));
wait(3000).then(message => console.log(message));


// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(3).catch(() => console.log(reject));
// wait(2000).then(() => console.log('Two is the loneliest number since the number one...You\'ll see this after 2 seconds'));
// console.log(wait(1000));
