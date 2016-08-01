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
	// makeNav()
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

// var s = {
//   'height': $(window).height(),
//   'width': $(window).width()
// },
//   scrollItems$ = $('.scroll-item'),
//   navItems$,
//   // for caching the scrolling sections
//   scrollItemsArr = [],              
//   // for caching the nav items
//   navItemsArr = []                  
  
// // loop through scrolling sections and grab data
// scrollItems$.each(function(i){      
//   var this$ = $(this)
//   // store section data in cache array
//   scrollItemsArr[i] = {             
//     id: this.id,
//     elem: this$,
//     offset: this$.offset().top,
//     height: this$.outerHeight(true)
//   }
// })
// build nav dynamically
// var makeNav = function() {

// 	debugger;
//   var nav = document.createElement('div')
//   nav.setAttribute('class',  'scroll-nav-container')
//   // build nav dots, setting class, href, and title
//   for ( var i=0; i<scrollItems$.length; i++ ) {
//     var dot = document.createElement('a')
//     dot.setAttribute('class', 'scroll-nav-item')
//     dot.setAttribute('href', '#'+scrollItems$[i].getAttribute('id'))
//     // dot.setAttribute('title', scrollItems$[i].getAttribute('data-nav-label'))
//     nav.appendChild(dot)
//     // store nav dot data in cache array
//     navItemsArr[i] = dot
//   }
//   $('body').append(nav)
//   navItems$ = $('.scroll-nav-item')
// }
// // where the logic happens
// $(window).on('scroll', function(e){
	
//   // var scrollPos = $('body').scrollTop()
//   // for ( var i=0; i<scrollItemsArr.length; i++ ) {
//     // var cur = scrollItemsArr[i]
//     // ensure target section is at least half in view
//     // if (scrollPos > (cur.offset - viewport.height/2)) {
//       navItems$.removeClass('active')
//       var hash = window.location.hash.substring(1);
//       console.log(hash)
//       $(navItemsArr[hash]).addClass('active')
//     // }
//   // }
// })

