import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAppointmentsComponent } from './shop-appointments.component';

describe('ShopAppointmentsComponent', () => {
  let component: ShopAppointmentsComponent;
  let fixture: ComponentFixture<ShopAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
