$('[data-toggle="tooltip"]').tooltip('hide');

$('[data-toggle="popover"]').popover();

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
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

