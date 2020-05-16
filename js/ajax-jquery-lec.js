"use strict"

$(document).ready(function() {

//AJAX Asynchronous JavaScript and XML

// AJAX requests will often employ the use of an API (Application Programming Interface), or JSON file and return us information using JS Obj. Notation.(JSON)

//A JSON object will often look like this:

    var obj = {
        "key": "value",
        "number": 45,
        "obj": [1, 2, 3]
    };

    console.log(obj.key); // returns "value"

    // API CALL
    //  $.get('API url').done(function(info){
    //
    //  });

    $.ajax('url', {type: "GET"}).done(function (info) {

    });

    $.ajax('url').done(function (info) {
        //this is the same thing as including 'GET' - by default
        // Run all functionality here...
    });

    // With APIs we dont control howl long a call to an API will take...the outside server does.

    // .done means once the call is returned then run an anonymous function

    // ASYNCHRONUS calls mean you don't know when they will return to run functions with APIs...in order to use info from an outside source use .done(function()

    //  ==========================
// DONT DO THIS
// var = something
//     $.ajax( 'url', {type: "GET"}).done(function(info) {
//     something = info
//     });
//
// return something,
//    =============================

//     $('#submit').click(function(e){
//         e.preventDefault();
//         $('#picture-example').html('<img>');
//         var val = $('input').val().toLowerCase()
// ;
//         if(val === 'dream team'){
//             $('picture-example').html("");
//             $.ajax(url).done(function(resp){
//
//             })
//         }
//     })
    var count = 0;
    var val = $('input').val().toLowerCase()
    $.ajax('url' + val.split("'").join("")).done(function (resp) { //searching for pokemon's name; resp is taking in the response-can name parameter whatever you want
        $('#picture-example').html('<img class="push" src"' + resp.sprites.front_default + ' "alt="' + val + '>"');
    }).fail(function () {
        $('#picture-axample').html('<img class="greymon" src="img/something" alt="' + val + ' is not a pokemon"><h4 class="pull">I\'m sorry. "' + val + '" is not a pokemon.</h4>');
    }).always(function(resp){
        // Benefit of this method is that we're able to have functionality no matter what
        if(count === 5){
            return;
        }else{
            count++;
        }
    })

   // this is how you include a sprite or image from an API to push into your html
    // class="push" in this example is JUST referring to styling.


   // can simplify with .get
    $.get('url').done


});