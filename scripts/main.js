//Main.js

$(function() {


	

	$.scrollify({
		section : ".section",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});




	
	initMap()
});



function initMap(){

	pos = {lat: 30.2688, lng: -97.7489}
	var  map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 16,
		draggable: false,
	    scrollwheel: false,
	    panControl: false,
	    disableDefaultUI: true
	    // maxZoom: Zoom,
	    // minZoom: Zoom,
	    // zoom: Zoom
	});

	var crds = [{lat: 43.7001100, lng: -79.4163000}, //toronto
				{lat: 43.5789000, lng: -79.6583000}, //sauga
				{lat: 43.4668000, lng: -80.5163900}, //loo
				{lat: 41.8500300, lng: -87.6500500}, //chi town
				];

	var markers = [];//some array

	crds.forEach(function(crd){
		markers.push(new google.maps.Marker({
			position: crd,
			map: map

		}));
	});

	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++) {
	 bounds.extend(markers[i].getPosition());
	}
	map.fitBounds(bounds);

	

}