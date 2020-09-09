import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-services',
  templateUrl: './shop-services.component.html',
  styleUrls: ['./shop-services.component.css']
})
export class ShopServicesComponent implements OnInit {
  @Input() palette;

  constructor() { }

  ngOnInit(): void {
  }

}
