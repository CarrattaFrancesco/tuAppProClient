import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('fadeIn', style({opacity: 1})),
      state('fadeOut', style({opacity: 0})),

      // fade in when created. this could also be written as transition('void => *')
      transition('* => fadeIn', [
        style({opacity: 0}),
        animate(1000 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition('fadeIn <=> fadeOut', [
        animate(500)
      ]),
    ])
  ]
})
export class LoaderComponent implements OnInit {

  @Input() active = true;


  constructor() { }

  ngOnInit(): void {
  }




  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    console.log("cambiato");
  }
}
