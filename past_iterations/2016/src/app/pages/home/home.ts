import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';


@Component({
  templateUrl: './home.html',
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
        animate('1s ease-in')
      ]),
      transition('* => void', [
        style({
          opacity: 0,
          transform: 'translateY(100%)'
        }),
        animate('0.5s ease-out'),
      ])
      // transition('* => void', [
      //   animate('0.5s ease-out', style({
      //     opacity: 0,
      //     transform: 'translateY(100%)'
      //   }))
      // ])
    ])
  ]
})


export class HomeComponent{
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }
}
