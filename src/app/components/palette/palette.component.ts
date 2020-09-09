import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  @Input() paletteColors = [];
  constructor() { }

  ngOnInit(): void {
    if (this.paletteColors.length === 0){
      this.paletteColors = ['#fff', '#000', '#AAA', '#BBB', '#ABC'];
    }
  }

}
