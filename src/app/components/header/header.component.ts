import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() borderRadius;
  @Input() backgroundColor;
  @Input() textColor = "#000";
  @Input() width = '%100';

  constructor() { }

  ngOnInit(): void {
  }

}
