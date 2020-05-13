"use strict";

$(document).ready(function() {

    // var title = $('#welcome-title').html();
    //     alert(title);

    // var paragraphOne = $('#first-paragraph').html();
    //     alert(paragraphOne);

    // var games = $('#game').html();
    //     alert(games);

    // $('.codeup').css('border', '1px solid red');

    $('li').css('font-size', '20px');

    // $('.highlight').css('background-color', 'yellow');

    // var titleOne = $('#titleOne').html();
    //     alert(titleOne);
    // var titleTwo = $('#titleTwo').html();
    // alert(titleTwo);
    // var titleThree = $('#titleThree').html();
    // alert(titleThree);

    // $('h1, p, li').css({
    //     'background-color': 'black',
    //     'color': 'white'
    //
    // });

    $('#titleOne').click(function(){ //lstener takes in an annonymous function
       $(this).css("background-color", "orange"); //We want 'this' to change
    });

    $('p').dblclick(function() {
       $(this).css("font-size", "18px");
    });

    $('li').hover(function() {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'black');
    });

    // $('li').click(function() {
    //    $(this).slideToggle().off("click");
    // });

    // $('li').on('click', function(){
    //    $(this).hideDisplay();
    // });
    //
    // // $('li').click(function(){
    // //    $(this).slideToggle();
    // // });
    //
    // $('li').off('click', function(){
    //    $(this).slideToggle().on('click');
    // });

    // $("#hide").click(function(){
    //     $("this").hide();
    // });
    //
    // $("#show").click(function(){
    //     $("this").show();
    // });  //proper way to trigger multiple events

});

    //Using an IIFE in combination with jQuery DOM ready
// (function($){
//     $(document).ready(function() {
//        alert('The DOM has finished loading!');
        // JAVASCRIPT GOES HERE
//     });
//
// })(jQuery); // how to use IIFE with jQuery


