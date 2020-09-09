import {Component, ElementRef, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';

import { AppDataService } from '../../services/app-data.service';


@Component({
  selector: 'app-welcome-slider',
  templateUrl: './welcome-slider.component.html',
  styleUrls: ['./welcome-slider.component.css'],
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
        animate(300)
      ]),
    ])
  ]
})
export class WelcomeSliderComponent implements OnInit {

  fadeAnimation = true;
  index = 0;

  slide = [
    {
      id : 1,
      title: 'Crea la tua applicazione',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc : 'slide1.png'
    },
    {
      id : 2,
      title: 'Modifica lo stile',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc : 'slide2.png'
    },
    {
      id : 3,
      title: 'Pubblicala sugli store',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc : 'slide3.png'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private appData: AppDataService) { }

  ngOnInit(): void {
  }

   nextSlide(){
    if (this.index < this.slide.length - 1){
      this.fadeAnimation = false;
      setTimeout(() => {
        this.index ++;
        document.getElementById('circle' + this.index).classList.remove('active');
        document.getElementById('circle' + (this.index + 1)).classList.add('active');
        this.fadeAnimation = true;
      }, 300 );
    }else{
      this.finish();
    }


   }

   finish(){
     this.router.navigate(['signIn']);
     this.appData.setWelcomeSeen();
   }
}
