$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.btn-next',
        prevButton: '.btn-prev',
    });

    $('.header-bottom').affix({offset: {top: 190}});
});