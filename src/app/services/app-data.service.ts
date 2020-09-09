import { Injectable } from '@angular/core';

/* interfaccia per la gestione dei dati dell'app come :
 * - Welcome-slider visualizza o no
* */

@Injectable({
  providedIn: 'root'
})
export class AppDataService { // todo collegare gli app data al db

  // diventa true se le slide di tutorial iniziale sono già state viste
  isWelcomeSeen(){
    // tslint:disable-next-line:triple-equals
    if (localStorage.getItem('welcomeSeen') == 'true') {
      return true;
    } else{
      return false;
    }
  }

  setWelcomeSeen(){
    localStorage.setItem('welcomeSeen', 'true');
  }
}
