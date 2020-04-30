(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // function newArr(arr){
    //     //empty bucket
    //     // var planetsArray = []; This is from another walk through
    //     var planetsArray = arr.split(',');
    //     //     newPlanetsArray.forEach(function (element) {
    //     //         // element will be added to planetsArray
    //     //         planetsArray.push(element);
    //     //
    //     //     });
    //     //
    //     // return planetsArray;
    // }
    planetsArray = planetsString.split('|'); //must use the same delimiter as the string
    console.log(planetsArray);


    // ["Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune"]

//     var newArr = [];
//     var startingPoint = 0;
//     var endpoint = 0;
//     for( var i = 0; i < planetsString.length; i++){
//     if(planetsString.charAt(i) === "|"){
//         endpoint = charAt(i) === "|";
//         newArr.push(planetsString.substr(startingPoint, endpoint));
//         startingPoint = i + 1; // maybe plus one
//         // newArr.push(planetsString.substr(startingPoint, endpoint));
//     }
// }
// console.log(newArr);
//





    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // var brPlanets = planetsArray.join('<br>');
    // var brPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";

    // var listPlanetsString = planetsArray.join('<ul><li></li></ul>'); lol - a bit more involved than this



// function returnList(arr){
//     var newList = "<ul>";
//     arr.forEach(function(element){
//        newList += "<li>" + element + "</li>";
//     });
//     newList += "</ul>";
//     return newList;
//     }


    // var planetsList = "<ul>";
    //     planetsArray.forEach(function(planet) {
    //         planetsList += "<li>" + planet + "</li>";
    //     });
    // planetsList += "</ul>";
    //
    // document.getElementById('planets-list').innerHTML = returnList('planetsArray');
})();
