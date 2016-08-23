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


        function openMenu() {
            var burger = document.getElementsByClassName('js-burger')[0],
                menu = document.getElementsByClassName('js-menu-phone')[0];

                burger.onclick = function() {
                    menu.classList.toggle('visible');
                }
        }

        function heightOrder() {
            var parent = document.getElementsByClassName('js-parent')[0];

                if(!!parent) {
                    var child = document.getElementsByClassName('js-child')[0],
                        clientWidth = document.documentElement.clientWidth;

                    if(clientWidth > 991) {

                        var height  = parent.offsetHeight;
                        child.style.height = height + 'px';

                    } else {
                        child.style.height = '';
                    }
                }
        }

        function setPlaceholder() {
            var input = document.querySelectorAll('input[type=text],input[type=phone]');

                if(!!input) {

                    for (var i = 0; i < input.length; i++) {

                        input[i].onfocus = function() {
                            var placeholder = this.getAttribute('placeholder'),
                                oldText = this.setAttribute('data-text', placeholder);
                            this.removeAttribute('placeholder');
                        }

                        input[i].onblur = function() {
                            var text = this.getAttribute('data-text');
                                this.setAttribute('placeholder', text);
                        }
                    }
                }
        }

        setPlaceholder();
        heightOrder();
        openMenu();

        window.onresize = function() {
            heightOrder();
        }

    });
}());