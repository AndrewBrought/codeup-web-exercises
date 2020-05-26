"use strict"



// function recentUserHistory(username, API_KEY) {
//     var Key = fetch(`https://api.github.com/users/${username}/events/public`, {
//         headers: {'Authorization': `token ${API_KEY}`}})
//
//         Key.then(response => response.json())
//             // we want to filter through pushEvents only           // this is referring to the created at property of the most recent "PushEvent"
//             .then(events => console.log(new Date(events.filter(event => event.type === "PushEvent")[0].created_at).toDateString()));
//          //Practice talking through this
// }
// recentUserHistory("AndrewBrought", GITHUB_API_KEY)

//WALKTHROUGH - SOPHIE'S SOLUTION:


function recentUserHistory(username, API_KEY) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {'Authorization': `token ${API_KEY}`}}).then(response => response.json())
        // we want to filter through pushEvents only      // this is referring to the created at property of the most recent "PushEvent"
        .then(events => {
        return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}
// Function Call
recentUserHistory("AndrewBrought", GITHUB_API_KEY).then(date => {
   console.log(new Date(date));
});


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
            if (Number.isInteger(num/1000)) {
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

// ...for my code I would then add a condition to differentiate between seconds and second.

// WALKTHROUGH SOPHIE'S SOLUTION:

function wait(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(()=> {
            if(seconds > 1000){
                console.log("You\'ll see this after " + seconds/1000 + " seconds");
            } else{
                console.log("You\'ll see this after " + seconds/1000 + " second");
            }
        }, seconds)

    });

}
wait(1);
wait(2);
wait(3);


// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(3).catch(() => console.log(reject));
// wait(2000).then(() => console.log('Two is the loneliest number since the number one...You\'ll see this after 2 seconds'));
// console.log(wait(1000));
