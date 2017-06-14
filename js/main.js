$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.btn-next',
        prevButton: '.btn-prev'
    });

    $('.header-bottom').affix({offset: {top: 190}});

    // inputs focus effect
    $('.input-style').on('focus', function () {
        $(this).closest('.input-wrap').addClass('active');
    }).on('blur', function () {
        $(this).closest('.input-wrap').removeClass('active');
    });

    $('.header .main-nav-list a').click(function (e) {
        e.preventDefault();

        $('.header .main-nav-list .sub-menu').hide();
        $(this).siblings('.sub-menu').slideToggle(500);
    });

    $('.burger').click(function (e) {
        e.preventDefault();

        $('.header-bottom').addClass('active');
        $('body').addClass('overflow');
    });

    $('.close-nav').click(function (e) {
        $('.header-bottom').removeClass('active');
        $('body').removeClass('overflow');
    })
});