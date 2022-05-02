/**
 * My functions:
 * #1 - Dropdown Arrow
 * #2 - Responsive search box
 * #3 - Responsive menu trigger
 * #4 - Responsive menu close
 * #5 - Home-Hero Area Slider
 * #6 - Home-Carousel Most View Product
 * #7 - Home-Payment Area Slider
 * #8 - Cart-Quantity plus minus
 * 
 */

;(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        // #1 - Dropdown Arrow
        $('.leaven__main_menu nav ul li ul').addClass('submenu');
        $('.leaven__main_menu nav ul li ul').before('<span><i class="fa fa-angle-down"></i></span>');

        // #2 - Responsive search box
        $(".leaven__search_icon_btn").click(function(){
            $(".leaven__search_input").toggleClass("active");
        });

        // #3 - Responsive menu trigger
        $(".leaven__menu_icon").click(function(){
            $(".leaven__main_menu").toggleClass("active");
            $(".leaven__menu_icon").toggleClass("active");
        });

        // #4 - Responsive menu close
        $(".leaven__menu_cross_icon").click(function(){
            $(".leaven__main_menu").removeClass("active");
            $(".leaven__menu_icon").removeClass("active");
        });

        // #5 - Home-Hero Area Slider
        $('.leaven__hero_area').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        // #6 - Home-Carousel Most View Product
        $('.leaven__most_view_carousel').slick({
            centerMode: true,
            arrows: true,
            centerPadding: '0px',
            slidesToShow: 3,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        // #7 - Home-Payment Area Slider
        $('.leaven__payment_carousel').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
            ]
        });

        // #8 - Cart-Quantity plus minus
        $(function() { 
            (function quantityProducts() {
                var $quantityArrowMinus = $(".leaven__quantity_arrow_minus");
                var $quantityArrowPlus = $(".leaven__quantity_arrow_plus");
                var $quantityNum = $(".leaven__quantity_num");

                $quantityArrowMinus.click(quantityMinus);
                $quantityArrowPlus.click(quantityPlus);

                function quantityMinus() {
                if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
                }
                }

                function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
                }
            })();

        });

    });

}(jQuery));

