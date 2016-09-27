import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state, ViewContainerRef, ViewEncapsulation,
         ViewChild, TemplateRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
// import { InAppModalModule, Modal } from './in-app-plugin/index';



declare var google: any;

@Component({
  templateUrl: './work.html',
  // providers: InAppModalModule.getProviders(),
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transition: 'opacity'
          // transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class WorkComponent {

  // @ViewChild('myTemplate', {read: TemplateRef}) private myTemplate: TemplateRef<any>;

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
    // gmodal = modal;
  }

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }
  jobs = [{
    id: 1,
    company: "Asigra Inc",
    title: "Software Developer",
    description: `<p>
                    My first co-op placement was in my hometown of Toronto, thus making transitioning into a work life for the first time a lot smoother. However,
                    there were still many challenges to be faced a work. Using <span class="highlight">Java</span> and <span class="highlight">C++</span> I worked on improving the front-end for Asigra's cloud backup software.
                    In addition, I also created a <span class="highlight">LAN Discovery tool</span> which analyzes computers and other devices in a user's LAN to determine how much data should be backed up.
                  </p>`,
    location: "Toronto, ON",
    crd:  {lat: 43.7001100, lng: -79.4163000},
    time: "May 2014 - August 2014",
    marker: null
  },{
    id:2,
    company: "BDO Solutions",
    title: ".NET Developer",
    description: `<p>
                    When I joined the BDO Solutions for my second work term it was still known as Systemgroup Consulting Inc, before being acquired in a merger.
                    My work didn't change through the process of the merger though, as I worked on an <span class="highlight">ASP .NET</span> website for one of the company's clients
                    I also worked on the <span class="highlight">optimization of an emailing service</span>, improving performance by 90%
                  </p>`,
    location: "Mississauga, ON",
    crd:  {lat: 43.5789000, lng: -79.6583000},
    time: "January 2015 - April 2015",
    marker: null
  },{
    id:3,
    company: "Blackberry Ltd",
    title: "QA  Analyst",
    description: `<p>
                    Joining BlackBerry as a QA Analyst showed me a new perspective of software development. I was required to maintain hundreds of test cases for BlackBerry's BBM using
                    <span class="highlight"> Git </span> and  <span class="highlight">UTM.</span> In addition, I also oversaw the process of a third party application integration with BlackBerry. Going through a work term of tedious testing definitely allowed me to 
                    grow as a developer to write and create software with more care and precision.
                  </p>`,
    location: "Waterloo, ON",
    crd:  {lat: 43.4668000, lng: -80.5163900},
    time: "September 2015 - December 2015",
    marker: null
  }, {
    id:4,
    company: "Sears Holdings Coroporation",
    title: "Full Stack Developer",
    description: `<p>
                    Working at Sears Holding Coporation meant living and working in a foreign country for the first time and this provided me with an abundance of new challenges and excitement.
                    Initially joining the team as a front-end developer for the Sears Commercial internal admin site, I quickly took ownership of the entire project and worked its backend components as well.
                    Using <span class="highlight">Ruby on Rails</span> and <span class="highlight">AngularJS</span> as the respective back-end and front-end technologies.
                    I also created an ad recognition <span class="highlight">Ruby gem </span>using the <span class="highlight">Tesseract OCR</span>to be used company wide"
                  </p>`,
    location: "Chicago, IL",
    crd:  {lat: 41.8500300, lng: -87.6500500},
    time: "May 2016 - August 2016",
    marker: null
  }];

  ngOnInit(){
    this.initMap();
    this.attachDescriptions();
  }

  onClick(job){
    this.modal.alert()
        .title(job.company)
        .size('md')
        .showClose(true)
        .body(`
            <h4>${job.title}<h4>
            <h5>${job.location}
            <span class="pull-right">${job.time}</span></h5>`
            +job.description
          )
        .open();
  }
  attachDescriptions(){
    this.jobs[0].marker.addListener('click', ()=>{
      document.getElementById('1').click();
    });

    this.jobs[1].marker.addListener('click', ()=>{
      document.getElementById('2').click();
    });
    this.jobs[2].marker.addListener('click', ()=>{
      document.getElementById('3').click();
    });
    this.jobs[3].marker.addListener('click', ()=>{
      document.getElementById('4').click();
    });
  }



  initMap(){
    var mapStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f7f7f7"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e9f7e5"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffb4b4"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f4d7d3"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f5e6e2"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fec0c0"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#d24a43"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dce9ef"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#91b5d1"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"hue":"#ff0000"}]}];

  	var pos = {lat: 30.2688, lng: -97.7489}
  	map = new google.maps.Map(document.getElementById('map'), {
  		center: pos,
  		zoom: 16,
  		draggable: false,
      scrollwheel: false,
      panControl: false,
      disableDefaultUI: true,
      styles: mapStyle,
      zoomControl: false,
      scaleControl: false,
      disableDoubleClickZoom: true
  	});

  	// var crds = [{lat: 43.7001100, lng: -79.4163000}, //toronto
  	// 			{lat: 43.5789000, lng: -79.6583000}, //sauga
  	// 			{lat: 43.4668000, lng: -80.5163900}, //loo
  	// 			{lat: 41.8500300, lng: -87.6500500}, //chi town
  	// 			];


  	this.jobs.forEach(function(job){
      var marker = new  google.maps.Marker({
  			position: job.crd,
        label: job.id+'',
  			map: map
  		});
      job.marker = marker;
  		markers.push(marker);
  	});

  	var bounds = new google.maps.LatLngBounds();
  	for (var i = 0; i < markers.length; i++) {
  	 bounds.extend(markers[i].getPosition());
  	}
  	map.fitBounds(bounds);

  }


}
var gmodal;
var  map;
var markers = [];
