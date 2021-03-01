new WOW().init();
$(function(){
    var mixer = mixitup('.gallery__content');
});

$('.slider').slick({
    dots: true,
    arrows: false,
});

$('.menu__btn').on('click', function(){
    $('.header__top').toggleClass('header__top--active');

});
