//Defiler

var typed = new Typed('.element', {
    strings: ["Developper.", "Designer.", "Magical Princess."],
    typeSpeed: 30,
    loop: true
});

$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        items: 1,

    });


});

//scroll

$(function() {
    $.scrollIt({
        easing: 'ease',
        scrollTime: 1000,
        topOffset: 0
    });
});

//tri image

$grid = $("#photo1").isotope({
    itemSelector: '.six',
    layoutMode: 'fitRows'
});


$("#all-f").on("click", function() {
        $grid.isotope({ filter: '*' });
    }



)


$("#js-f").on("click", function() {
    $grid.isotope({ filter: '.js' });
})




$("#css-f").on("click", function() {
    $grid.isotope({ filter: '.css' });
})


$("#php-f").on("click", function() {
    $grid.isotope({ filter: '.php' });
})

//Function menu visible

$("#inv1").click(function() {
    $('.menucah1').toggleClass("menu_visible")
})