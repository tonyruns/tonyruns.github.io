import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
@Component({
   templateUrl: './projects.html',
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

 export class ProjectsComponent {
   @HostBinding('@routeAnimation') get routeAnimation() {
     return true;
   }

   @HostBinding('style.display') get display() {
     return 'block';
   }

   @HostBinding('style.position') get position() {
     return 'relative';
   }

   projects = [{
     "title": "QuotiMotivate",
     "date": "September 2016",
     "img": "quotimoti",
     "description": "lalalalal"
   },{
     "title": "Where Should I Run?",
     "date": "November 2015",
     "img": "wheretorun",
     "description": "lalalalal"
   }, {
     "title": "Word Sensor",
     "date": "Check this later",
     "img": "wordsensor",
     "description": "lalalalal"
   }, {
     "title": "Find the Country",
     "date": "Check this later",
     "img": "findthecountry",
     "description": "lalalalal"
   }]
 }
