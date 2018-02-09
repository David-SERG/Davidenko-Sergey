;(function ($) {
    $(function ($) {
        $('.element-gride').masonry({
            // options
            itemSelector: '.element-item',
            columnWidth: '.persent-size',
            percentPosition: true
            // originTop: true
        });


        $('.slick').slick({
            dots: true,
            arrows: false
        });
    });


})(jQuery);

function initMap() {
    var mapCenter = {lat: 49.5686402, lng: 34.5857419},
        infoWindowContent = jQuery('.maps').html(),
        beetroot = new google.maps.Map(
            document.getElementById('locationBlock'),
            {
                center: mapCenter,
                zoom: 15
            }
        ),
        image = new google.maps.MarkerImage(' ../img/img1.png'),

        marker = new google.maps.Marker(
            {
                position: mapCenter, //масштавируем карту
                draggable: false,
                map: beetroot,
                // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                icon: image
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

    marker.addListener('click', function () { // в api google maps слушатель событий addListener()
        infowindow.open(beetroot, marker);
    });
    marker.addListener('click', toggleBounce);
    // google.maps.event.addDomListener(window, 'load', toggleBounce);
}

