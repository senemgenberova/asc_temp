jQuery(document).ready(function ($) {

    function babyNamesColorChange(x, eq, color) {
        $(".baby_names").eq(eq).find("a").on({
            mouseenter: function () {
                $(this).css("color", color);
            },

            mouseleave: function () {
                $(this).css("color", "#646a82");
            },

            click: function () {
                $(".baby_names").eq(x).find("a").css("color", "#646a82");
                $(this).unbind("mouseenter mouseleave").css("color", color).parent().siblings().find("a").css("color", "#646a82");
            }
        });
    }

    for (var i = 0; i < 2; i++) {
        if (i == 0) {
            babyNamesColorChange(i + 1, i, "#FFAAAA");
        }
        else {
            babyNamesColorChange(i - 1, i, "#AAD4FF");
        }
    }

    $('.carousel').carousel({
        interval: false
    });

    console.log($(window).width());
    console.log($(window).height());
});