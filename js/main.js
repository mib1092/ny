jQuery(document).ready(function($) {

    // for Hero Homepage slider
    if ($('.swiper-container').length) {
        if ($('.swiper-container').hasClass('one')) {
            var options = {
                speed: 400,
                loop: true,
                simulateTouch: false,
                allowSwipeToPrev: false,
                autoHeight: true,
                allowSwipeToNext: false
            };
        } else {
            var options = {
                speed: 400,
                autoHeight: true,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.btn-next',
                prevButton: '.btn-prev'
            };
        }
        var mySwiper = new Swiper('.swiper-container', options);
    }

    // for Nav fixing
    $('.header-bottom').affix({offset: {top: 190}});

    // inputs focus effect
    $('.input-style').on('focus', function () {
        $(this).closest('.input-wrap').addClass('active');
    }).on('blur', function () {
        $(this).closest('.input-wrap').removeClass('active');
    });

    $('.header .main-nav-list a').click(function (e) {
        $('.header .main-nav-list .sub-menu').hide();
        $(this).siblings('.sub-menu').slideToggle(500);
    });

    $('.burger').click(function (e) {
        e.preventDefault();

        $('.header-bottom').addClass('active');
        $('body').addClass('overflow');
    });

    $('.close-nav').click(function (e) {
        e.preventDefault();

        $('.header-bottom').removeClass('active');
        $('body').removeClass('overflow');
    });

    $('.custom-dropdown .dropdown-list-link').click(function () {
        var value = $(this).text();
        var dropdown = $(this).parents('.custom-dropdown');

        dropdown.find('.dropdown-value').html(value);
        dropdown.removeClass('open');
    });

    $('.custom-dropdown .dropdown-value').click(function (e) {
        e.preventDefault();
        $(this).parents('.custom-dropdown').toggleClass('open');
    });

    $(document).click(function () {
        $('.custom-dropdown').removeClass('open');
    });

    $('.custom-dropdown').click(function (e) {
        e.stopPropagation();
    });

});