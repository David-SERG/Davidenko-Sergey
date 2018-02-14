;(function ($) {
    $(function () {
        //подключаем маску на ввод телефона c помощью
        $("#phone").mask("+3(999) 999-9999", {
            completed: function () {
                alert("Вы ввели номер: " + this.val());
            }
        });
        $('.sliders').slick({
            dots: true,
            arrows: false

        });
        $("#phoneTwo").mask("+3(999) 999-9999", {
            completed: function () {
                alert("Вы ввели номер: " + this.val());
            }
        });


        $('.cart').masonry({
            // options
            itemSelector: '.description',
            columnWidth: '.persent-size',
            percentPosition: true
            // originTop: true
        });

        $('.sliderVideo').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

    });

})(jQuery);

function initMap() {
    var mapCenter = {lat: 49.9918224, lng: 36.2271354},
        infoWindowContent = jQuery('.info-window-content').html(),
        kharkiv = new google.maps.Map(
            document.getElementById('location-block'),
            {
                center: mapCenter,
                zoom: 10
            }
        ),
        marker = new google.maps.Marker(
            {
                position: mapCenter,
                map: kharkiv,
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            }
        ),
        infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    marker.addListener('click', function() { // в api google maps слушатель событий addListener()
        infowindow.open(kharkiv, marker);
    });
    marker.addListener('click', toggleBounce);
     google.maps.event.addDomListener(window, 'load', toggleBounce);
}
