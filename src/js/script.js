(function () {
    "use strict";

    $(function(){

        $('.js-slider').slick({
            appendArrows: $('.js-arrows'),
            appendDots: $('.js-dots'),
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            dots: true
        });
    });
}());