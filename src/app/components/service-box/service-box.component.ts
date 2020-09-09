import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatDialog} from '@angular/material/dialog';
import {AppointmentFormComponent} from "../appointment-form/appointment-form.component";

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent implements OnInit {
  @Input() palette ;
  @Input() isOwner;
  services: any = [];
  borderColor: any;
  colorPrice = 'var(--primary)';

  constructor(public dialog: MatDialog, private router: Router, private elementRef: ElementRef, private userService: UserService) { }

  ngOnInit(): void {

    if (this.palette){
      console.log(this.palette);
      this.borderColor = this.palette.colors[0];
      this.colorPrice = this.palette.colors[1];
    }


    this.userService.getService().then((val) => {
      this.services = val;
      console.log(val);
    });

  }


  prenota(id: any){
    const dialogRef = this.dialog.open(AppointmentFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
