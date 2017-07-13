(function (d) {
    'use strict';

    $(document).ready(function () {

        /*--------------------------
         Preloader jQuery
         ---------------------------- */
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 3000);

        // Video popup
        jQuery("a.demo").YouTubePopUp();

        /*--------------------------
         Bootstrap slider captions animation
         ---------------------------- */
        (function( $ ) {
            //Function to animate slider captions 
            function doAnimations( elems ) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';
                
                elems.each(function () {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
            
            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
                
            //Initialize carousel 
            $myCarousel.carousel({
                interval: 5000,
            });
            
            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Other slides to be animated on carousel slide event 
            $myCarousel.on('slide.bs.carousel', function (e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });

            $myCarousel.on('mouseover', function (e) {
                 $myCarousel.carousel();
            });
            
        })(jQuery);



        /*--------------------------
         Scroll Up jQuery
         ---------------------------- */
        var amountScrolled = 300;
        $(window).scroll(function () {
            if ($(window).scrollTop() > amountScrolled) {
                $("a.back-to-top").fadeIn('slow');
            } else {
                $("a.back-to-top").fadeOut('slow');
            }
        });
        $("a.back-to-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
        // End Scroll Up

        /*--------------------------
         Counter
         ---------------------------- */
        $(".count01").jQuerySimpleCounter({
            end: 876640,
            duration: 15000
        });

        $(".count02").jQuerySimpleCounter({
            end: 27512,
            duration: 16000
        });

        $(".count03").jQuerySimpleCounter({
            end: 65810,
            duration: 17000
        });

        $(".count04").jQuerySimpleCounter({
            end: 46906,
            duration: 17000
        });
        // End Counter

    });// Document End





    /*--------------------------
     Navigation scroll jQuery
     ---------------------------- */
    function main() {
        (function () {
            $("a.page-scroll").click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 40
                        }, 900);
                        return false;
                    }
                }
            });
        }());
    }
    main();

    /*--------------------------
     Bootstrap portfilter
     ---------------------------- */
    var c = "portfilter";
    var b = function (e) {
        this.$element = d(e);
        this.stuff = d("[data-tag]");
        this.target = this.$element.data("target") || ""
    };
    b.prototype.filter = function (g) {
        var e = [], f = this.target;
        this.stuff.fadeOut("fast").promise().done(function () {
            d(this).each(function () {
                if (d(this).data("tag") == f || f == "all") {
                    e.push(this)
                }
            });
            d(e).show()
        })
    };
    var a = d.fn[c];
    d.fn[c] = function (e) {
        return this.each(function () {
            var g = d(this), f = g.data(c);
            if (!f) {
                g.data(c, (f = new b(this)))
            }
            if (e == "filter") {
                f.filter()
            }
        })
    };
    d.fn[c].defaults = {};
    d.fn[c].Constructor = b;
    d.fn[c].noConflict = function () {
        d.fn[c] = a;
        return this
    };
    $(document).on("click.portfilter.data-api", "[data-toggle^=portfilter]", function (f) {
        d(this).portfilter("filter")
    })

    /*----------------------
    Contact form
    ----------------------- */
    function closeContactForm() {
        $(".toggle-contact-form").on("click", function() {
            $(".contact-inner").toggleClass("remove-form").parent(".container").fadeToggle();
            $(this).children(".fa-map").toggle();
            $(this).children(".fa-envelope").toggle();
        });
    }
    closeContactForm();


    /*----------------------------
     Testimonial Owl carousel slider
     ------------------------------ */
    $("#testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause:false,
        slideSpeed:2000,
        pagination:false,
        navigation:false,
        responsiveClass:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                nav:false
            },
            // breakpoint from 480 up
            480:{
                items:1,
                nav:false
            },
            // breakpoint from 768 up
            768:{
                items:1,
                nav:false
            },
            // breakpoint from 1000 up
            1000:{
                items:1,
                nav:true,
            }
        }
    });

    /*--------------------------
     Spacial Owl carousel slider
     ---------------------------- */
    $("#discount").owlCarousel({
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:3000,
        pagination:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                nav:false
            },
            // breakpoint from 480 up
            480:{
                items:1,
                nav:false
            },
            // breakpoint from 768 up
            768:{
                items:2,
                nav:false
            },
            // breakpoint from 1000 up
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    /*--------------------------
     Team Owl carousel slider
     ---------------------------- */

    $('#owl-demo').owlCarousel({
        autoplay: true,
        slideSpeed:2000,
        pagination:false,
        navigation:false,
        responsiveClass:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                nav:false
            },
            // breakpoint from 480 up
            480:{
                items:2,
                nav:false
            },
            // breakpoint from 768 up
            768:{
                items:2,
                nav:false
            },
            // breakpoint from 1000 up
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    /*----------------------------
     About Owl carousel slider
     ------------------------------ */
    $("#about-demo").owlCarousel({
        autoplay: true,
        slideSpeed:2000,
        pagination:false,
        navigation:false,
        responsiveClass:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                nav:false
            },
            // breakpoint from 480 up
            480:{
                items:1,
                nav:false
            },
            // breakpoint from 768 up
            768:{
                items:1,
                nav:false
            },
            // breakpoint from 1000 up
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

// Active Navebat
    $('body').scrollspy({target: ".navbar", offset: 50});

// Wow Animate
    new WOW().init();

})(jQuery); // End of use strict
