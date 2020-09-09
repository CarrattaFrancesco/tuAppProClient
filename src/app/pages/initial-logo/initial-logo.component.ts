import { Component, OnInit, ElementRef } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {  Router, ActivatedRoute} from '@angular/router';

import { AppDataService } from '../../services/app-data.service';
import {UserService} from '../../services/user.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-initial-logo',
  templateUrl: './initial-logo.component.html',
  styleUrls: ['./initial-logo.component.css'],
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
export class InitialLogoComponent implements OnInit {
  isActive = true;

  constructor(private elementRef: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private appData: AppDataService,
              private storage: StorageService,
              private userService: UserService) {
    // this.storage.clear();
    // this.userService.clearUser();
  }

  ngOnInit(): void {
    // full background color
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(#4247ff,#000469)';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = 'no-repeat';
    document.getElementById('bg').style.height = window.innerHeight + 'px';
    this.redirect();
  }


  redirect(){
    // dopo 2 secondi reinderizza alla welcome page
    setTimeout(() => {
      this.isActive = false; // attiva il fadeOut
      setTimeout(() => { // passa alla welcome page, se è stata già vista passa alla signIn page
        this.appData.isWelcomeSeen() ? this.router.navigate(['signIn']) : this.router.navigate(['welcome']);
        this.elementRef.nativeElement.ownerDocument.body.style.background = '#ffffff';
      }, 700 );

    }, 2000 );
  }





}
