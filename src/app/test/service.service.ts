import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private messageSource = new BehaviorSubject<number>(0);
  changeVar = this.messageSource.asObservable();

  constructor() {
    setTimeout(() => {
      this.messageSource.next(this.messageSource.getValue() + 1);
    }, 3000);
    setTimeout(() => {
      this.messageSource.next(this.messageSource.getValue() + 1);
    }, 3500);
    setTimeout(() => {
      this.messageSource.next(this.messageSource.getValue() + 1);
    }, 4000);
  }

  promise(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }


}
