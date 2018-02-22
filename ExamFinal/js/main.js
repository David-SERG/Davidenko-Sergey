;(function ($) {
    $('.sliders').slick({
        dots: true,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    $(document).ready(function () {
        $('.sliderTeam').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: '60px',
            prevArrow: '.pre',
            nextArrow: '.nex',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        centerMode: true,
                        centerPadding: '3px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        centerMode: true,
                        centerPadding: '5px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 376,
                    settings: {
                        centerMode: true,
                        centerPadding: '5px',
                        slidesToShow: 1,
                        arrow: false
                    }
                }
            ]
        });
    });


    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
    $("#Go_Top").scrollToTop();


    $(".open").on('click', function () {
        $(".slide_panel").animate({right: '201px'}, 500);
        $(".open").on('click', function () {
            $(".slide_panel").animate({right: '0'}, 500);
        });

    });

    $(".opens").on('click', function () {
        $(".slide_panel-2").animate({right: '201px'}, 500);
        $(".opens").on('click', function () {
            $(".slide_panel-2").animate({right: '0'}, 500);
        });
    });

})(jQuery);


function initMap() {
    var uluru = {lat: 62.4366969, lng: -8.5160027};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}