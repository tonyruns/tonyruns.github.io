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
     "type": "Web and Mobile Application",
     "description": "Plays motivational quotes from notable figures, such as Arnold Schwarzenegger",
     "technologies": ["Ionic", "Angular2", "Ruby on Rails"],
     "link": "http://quotimotivate.herokuapp.com/"
   },{
     "title": "Where Should I Run?",
     "date": "December 2015",
     "img": "wheretorun",
     "type": "Web Application",
     "description": "Finds nearby running routes for your daily runs",
     "technologies": ["NodeJS", "Express", "PostGres", "UnderArmour API"],
     "link": "https://where-should-i-run.herokuapp.com/"
   }, {
     "title": "PG13",
     "date": "November 2014",
     "img": "wordsensor",
     "type": "Chrome Extension",
     "description": "Sensors out profanity on the internet by replacing with comical terms",
     "technologies": ["JavaScript"],
     "link" : "https://chrome.google.com/webstore/detail/pg13/gopkaalmpckipgfjdoieohmngoflagaj"
   }, {
     "title": "Find the Country",
     "date": "March 2014",
     "img": "findthecountry",
     "type": "Web Game",
     "description": "Guessing game for finding countries",
     "technologies": ["HTML", "JavaScript", "Google Maps API"],
     "link": "http://wj2ma.github.io/FindtheCountry/"
   }]
 }
