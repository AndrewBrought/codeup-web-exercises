//  NOTES:

//With Vanilla JS
// document.getElementById('importanter-circle').addEventListener('click', function (){
//    this.style = 'background-image: url(img/europa); background-size: cover';
// });

// With jQuery
                      //HERE - we're adding the listener (click) function after targeting the id or class
// $('importanter-circle').click(function (){
//    $(this).css({
//        'background-image': 'url(img/io.png)',  //io is a moon in David's example
//        'background-size': 'cover'
//    });
// });

$('h1').dblclick(function(){    //The value of html is changing the html to a new title
    $(this).html('The Bringer of Jollity').css({"color": "seagreen", "background": "lightpicnk", "transtion": "0s"}).off("dblclick"); //This means turn off dbl click events for this element, which means we only want it to happen once
    $("body").css("background", "(color");
    $(".grandpa").css("background", "(color");
    $(".dad").css("background", "(color)");
    $(".son").css("background", "(lightcoral)");
    $("#important-circle").css("background", "(lightcoral)");
    $("#importanter-cricle").css("background", "(lightpink)")
});

$('.grandma').hover(function(){
    $(this).css('background-image', 'url(img/jupiter coin.webp)');
}, function() {
   $(this).css('background-image', 'url(img/jupiter.webp)');
});

$('h1').mouseenter(function(){
   $(this).css({
       "color": "dodgerblue",
       "transition": "2s"
   })
       .html("jQuery Events are Fun!")
       .off("mouseleave"); // Can also 'listen' for 'mouseleave'
});

$('submit').click(function(e) {  //the e represents the even itself..the button in a form has a default behavior to submit the form..SOOO, we use 'preventDefault' to use the type text form to trigger rather than submit a 'get request'
    e.preventDefault();
    var val = $('input').val().toLowerCase();
    console.log(val);
    if (val === 'pikachu') {
        $('#picture-example').html('<img class="push" src="img/pikachu.gif" alt="pikachu.gif">');
    } else if( val === 'dragonite') {
        $('#picture-example').html("dragonite")
    } else{
        $('#picture-example').html("anything else" - "default image")
        // ALL of these IDs are attached to an empty div that populates the images
    }
});