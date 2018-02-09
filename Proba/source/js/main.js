function initMap() {
    var e = {lat: 49.5686402, lng: 34.5857419}, n = jQuery(".maps").html(),
        o = new google.maps.Map(document.getElementById("locationBlock"), {center: e, zoom: 15}),
        i = new google.maps.MarkerImage(".../img/favicon.svg", new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(0, 32)),
        t = new google.maps.Marker({position: e, draggable: !1, map: o, icon: i}),
        a = new google.maps.InfoWindow({content: n});
    t.addListener("click", function () {
        a.open(o, t)
    }), t.addListener("click", function () {
        null !== t.getAnimation() ? t.setAnimation(null) : t.setAnimation(google.maps.Animation.BOUNCE)
    })
}

jQuery(function (e) {
    e(".element-gride").masonry({
        itemSelector: ".element-item",
        columnWidth: ".persent-size",
        percentPosition: !0
    }), e(".slick").slick({dots: !0, arrows: !1})
});