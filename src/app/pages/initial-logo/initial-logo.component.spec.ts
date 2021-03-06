import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLogoComponent } from './initial-logo.component';

describe('InitialLogoComponent', () => {
  let component: InitialLogoComponent;
  let fixture: ComponentFixture<InitialLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
