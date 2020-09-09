import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() active = 'home';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeTo(val) {
    this.router.navigate([val]);
  }

  routeToPreview(){
    this.router.navigate(['preview'], { queryParams: { from: this.active } });
  }
}
