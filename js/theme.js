$('[data-toggle="tooltip"]').tooltip('hide');

$('[data-toggle="popover"]').popover();

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});


$("#toggleFilter").on("click", function() {
    $(".row-offcanvas").toggleClass("active");
});

$("#toggleFilterClose").on("click", function() {
    $(".row-offcanvas").removeClass("active");
});

$('#catalogNav').on('show.bs.collapse', function () {
    $('.collapse-panel-holder.in').collapse('hide');
});

$(".close-compare-collapse").on("click", function() {
    $('#compare-collapse').collapse('hide');
});

$(".close-favorite-collapse").on("click", function() {
    $('#favorite-collapse').collapse('hide');
});

$(".close-shopping-cart").on("click", function() {
    $('#shopping-cart-collapse').collapse('hide');
});

$('#mainPromoCarousel').carousel({
    interval: 7000
})

$("#sliderRangePrice").ionRangeSlider({
    min: 0,
    max: 50000,
    type: 'double',
    postfix: " р.",
    prettify: false,
    hasGrid: true
});

$("#sliderRangeLength").ionRangeSlider({
    min: 0,
    max: 1000,
    type: 'double',
    postfix: " мм.",
    prettify: false,
    hasGrid: true
});

$("#sliderRangeWidth").ionRangeSlider({
    min: 0,
    max: 1000,
    type: 'double',
    postfix: " мм.",
    prettify: false,
    hasGrid: true
});


$(".scroll-container").mCustomScrollbar({
    horizontalScroll:true,
    autoDraggerLength:true,
    contentTouchScroll: true,
    theme: "dark-thick"
});