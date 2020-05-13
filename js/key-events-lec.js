
// $('#ted').keydown(function(){  //#ted is a text area
    //    $('#content').append("Key was pressed"); //content is in an empty div
    // }); // append add's to the end inside of the targeted element
    //
    //keydown is an event that happens when we pressed 'down'; repeats as the key is held down and will fire for every key on keyboard
    //keypress is only meant for text character keys on keyboard

    // $('#ted').keypress(function(){  //#ted is a text area
    //     $('#content').append("Key was pressed"); //content is in an empty div
    // });

    //keyup is listening to the release of the key - looks at all keys

// $('body').keyup(function(e) {   //This is targeting the "f" key
//     if(e.key === "f") {
//         $(this).css({
//             "background": "grey",
//             "color": "white"
//         });
//     }
// });

// $('#ted').on("keydown", function() {
//    $('content').append("<span>Key was pressed</span>");
// });

$('h1').hover(function() {
    $(this).html("hello from jQuery");
}, function(){
    $(this).html("Goodbye from jQuery!");
});

$('h1').on("click", function() {
    $('#content').append("<span>h1 was clicked</span>");
    $(this).off('mouseenter, click'); //the mouseenter triggered to off is referring to the hover event stated earlier
    $(this).mouseenter(function() {
       $(this).html("Back from the dead!");
    }).off(); //this shuts off everything once the click runs, it turns it off.
});

('#conctent').on('click', 'span', function() { //span is selected as the targeted click area -Sooo, we can target speceific areas as the second of 3 arguments for the .on() method
    $('this').css('background', 'yellow');
});

$('.banana').click(function(){
   $(this).css('background', 'yellow');
}); //.click refers to things that are added at page on initial load, only - will not work with things added to the page dynamically (after the document has originally been loaded).

// konami code: websites have easter eggs