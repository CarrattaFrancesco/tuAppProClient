import { Injectable } from '@angular/core';
import {AuthState, CognitoUserInterface} from '@aws-amplify/ui-components';
import {StorageService} from './storage.service';
import {
  APIService,
  CreateAppProInput,
  CreateBranchInput,
  CreateBranchProInput,
  CreateOwnerProInput,
  CreateServiceProInput,
  CreateShopProInput,
  CreateStyleInput,
  CreateUserInput,
  DeleteAppInput,
  DeleteBranchInput,
  DeleteServiceProInput,
  DeleteShopProInput,
  DeleteStyleInput,
  GetShopProQuery,
  Role,
  UpdateAppProInput,
  UpdateBranchProInput,
  UpdateOwnerProInput, UpdateServiceProInput,
  UpdateShopProInput,
  UpdateStyleInput
} from '../API.service';
import {BehaviorSubject} from 'rxjs';

const DEBUG = true;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ownerAppId = '36a642ef-6a72-4cbd-8a58-2eae5fba7b4a';
  user: any;
  shop;
  branch;
  app;
  style;
  authState: AuthState; // stato di autenticazione : signIn, signOut


  /* // stage nel quale lo user si trova che ne consegue uno specifico redirect alla pagina
  * - 0 : prima volta che accede
  * - 1 : redirect verso la home
  */
  stage = 1;

  private countCreation = new BehaviorSubject<number>(0);
  changeCountCreation = this.countCreation.asObservable();




  constructor(private storage: StorageService, private api: APIService) {
    const tmpUser = this.storage.getItem('user');
    if (tmpUser) {
      this.user = tmpUser;
    }
  }

  initialized() {
    if (!this.shop){
      if (!this.storage.getItem('shop')){
        this.shop = {
          id: undefined,
          logo: undefined,
          name: '',
          description: '',
          pIva: undefined,
          ragioneSociale: undefined,
          sedeLegale: undefined,
          sedeLegale_id: undefined,
          shopProOwnerId: undefined,
          website: undefined
        };
      }else{
        this.shop = this.storage.getItem('shop');
      }
    }

    if (!this.branch){
      if (!this.storage.getItem('branch')){
        this.branch = {
          Active: undefined,
          address: undefined,
          address_id: undefined,
          branchProShopId: undefined,
          branchProWorkTimeId: undefined,
          id: undefined,
          linkFB: undefined,
          linkIG: undefined,
          linkTW: undefined,
          phone: '',
          workCategory: undefined
        };
      }else{
        this.branch = this.storage.getItem('branch');
      }
    }

    if (!this.app){
      if (!this.storage.getItem('app')){
        this.app = {
          name: undefined,
          CreatedAt: undefined,
          SplashScreen: undefined,
          UpdateAt: undefined,
          active: undefined,
          appProOwnerId: undefined,
          appProShopId: undefined,
          appProStyleId: undefined,
          description: '',
          id: undefined,
          link: undefined,
          logo: undefined,
          type: undefined
        };
      }else{
        this.app = this.storage.getItem('app');
      }
    }

    if (!this.style){
      if (!this.storage.getItem('style')){
        this.style = {
          id: undefined,
          palette: undefined,
          menu: undefined,
          headers: undefined,
          tab: undefined,
          pages: undefined
        };
      }else{
        this.style = this.storage.getItem('style');
      }
    }
  }



  /**
   * Funzione che genera o fa un retrive dello user dal db attraverso l'id congnito
   */
  // @ts-ignore
  setCognitoUser(cognito): Promise<any>{
    console.log(cognito);
    return new Promise((resolve, reject) => {
      this.api.GetCustomerPro(cognito.attributes.sub).then( value => {

        if (value){ // retrive e salvataggio nello storage
          console.log('[info] - User presente sul database');
          this.user = value;
          this.storage.setItem('user', value);
          console.log(this.user);
          resolve(this.user);
        } else{ // generazione e salvataggio sul db
          console.log('[info] - Salvataggio user sul database');
          this.user = {
            id: cognito.attributes.sub,
            email: cognito.attributes.email,
            username: cognito.attributes.name + cognito.attributes.family_name,
            nome: cognito.attributes.name,
            cognome: cognito.attributes.family_name,
            cell: cognito.attributes.phone,
            blocked: false,
          };

          this.api.CreateCustomerPro(this.user).then(r => {
            // console.log(r);
            console.log('[info] - Salvataggio user avvenuto con successo');
            this.storage.setItem('user', r);
            resolve(this.user);
          });

        }
      }).catch( error => {
        reject(error);
      });
    });

  }

  /**
   * Salva gli input dello shop nella variabile e nello storage in modo tale da averla disponibile tra tutte le pagine (non sul cloud)
   */
  setShopProInput(log, nam, des, pIv, ragionesocial, sedelegal, sedelegalId, websit){

    if (log !== undefined) { this.shop.logo = log; }
    if (nam !== undefined) { this.shop.name = nam; }
    if (des !== undefined) { this.shop.description = des; }
    if (pIv !== undefined) { this.shop.pIva = pIv; }
    if (ragionesocial !== undefined) { this.shop.ragioneSociale = ragionesocial; }
    if (sedelegal !== undefined) { this.shop.sedeLegale = sedelegal; }
    if (sedelegalId !== undefined) { this.shop.sedeLegale_id = sedelegalId; }
    if (websit !== undefined) { this.shop.website = websit; }

    this.storage.setItem('shop', this.shop);
  }


  /**
   * Salva il branch nella variabile e nello storage in modo tale da averla disponibile tra tutte le pagine (non sul cloud)
   */
  setBranchProInput(active, addr, addressId, worktimeID, linkFb, LinkIg, linkTw, p, workC){

    if (active !== undefined) { this.branch.Active = active; }
    if (addr !== undefined) { this.branch.address = addr; }
    if (addressId !== undefined) { this.branch.address_id = addressId; }
    if (worktimeID !== undefined) { this.branch.branchProWorkTimeId = worktimeID; }
    if (linkFb !== undefined) { this.branch.linkFB = linkFb; }
    if (LinkIg !== undefined) { this.branch.linkIG = LinkIg; }
    if (linkTw !== undefined) { this.branch.linkTW = linkTw; }
    if (p !== undefined) { this.branch.phone = p; }
    if (workC !== undefined) { this.branch.workCategory = workC; }

    this.storage.setItem('branch', this.branch);

  }


  /**
   * Salva l'app nella variabile e nello storage in modo tale da averla disponibile tra tutte le pagine (non sul cloud)
   */
  // tslint:disable-next-line:no-unnecessary-initializer
  setApp(nam, desc, activ, lin, log, typ, ownerId , shopId, styleId, splash) {
    if (nam !== undefined) { this.app.name = nam; }
    if (desc !== undefined) { this.app.description = desc; }
    if (activ !== undefined) { this.app.active = activ; }
    if (ownerId !== undefined) { this.app.appProOwnerId = ownerId; }
    if (shopId !== undefined) { this.app.appProShopId = shopId; }
    if (styleId !== undefined) { this.app.appProStyleId = styleId; }
    if (lin !== undefined) { this.app.link = lin; }
    if (desc !== undefined) { this.app.description = desc; }
    if (log !== undefined) { this.app.logo = log; }
    if (typ !== undefined) { this.app.type = typ; }
    if (splash !== undefined) { this.app.SplashScreen = splash; }

    this.storage.setItem('app', this.app);
  }


  setStyle(palett, header, ta, page, men) {
    if (palett !== undefined) { this.style.palette = palett; }
    if (header !== undefined) { this.style.headers = header; }
    if (ta !== undefined) { this.style.tab = ta; }
    if (page !== undefined) { this.style.pages = page; }
    if (men !== undefined) { this.style.menu = men; }

    this.storage.setItem('style', this.style);
  }




  /**
   * L'authState è lo stato di autenticazione in cui si trova lo user
   */
  setAuthState(state){
    // console.log(state);
    this.authState = state;
    this.storage.setItem('authState', this.authState);
    // tslint:disable-next-line:triple-equals
    if (this.authState == 'confirmSignUp'){ // se deve confermare il codice vuol dire che è la prima volta che accede
      this.stage = 0;
    }
  }

  getAuthState(){
    return this.storage.getItem('authState');
  }



  clearUser(){
    this.user = undefined;
    this.authState = undefined;
    this.shop = undefined;
    this.app = undefined;
    this.branch = undefined;
    this.style = undefined;
    this.stage = 1;
  }

  getStage(){
    return this.stage;
  }


  show(){
    console.log('user: ');
    console.log(this.user);
    console.log('Shop: ');
    console.log(this.shop);
    console.log('Branch: ');
    console.log(this.branch);
    console.log('app: ');
    console.log(this.app);
    console.log('style: ');
    console.log(this.style);
  }


  getShop() {
    return this.shop;
  }


  getApp() {
    return this.app;
  }

  getBranch(){
    return this.branch;
  }

  getStyle(){
    return this.style;
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.user || !this.style || !this.app || !this.branch ){
        this.getUserFromDB().then(() => {
          this.getAppfromDb().then(() => {
            resolve(this.user);
          }).catch((val) => {
            reject(val);
          });
        });
      }else{
        resolve(this.user);
      }
    });
  }



  getUserFromDB(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.user) {
        this.api.GetCustomerPro(this.user.id).then(val => {
          this.user = val;
          resolve(true);
        });
      }else{
        console.error("errore in getuserFromDb");
        console.error(this.user);
        reject(false);
      }
    });
  }

  userParameterSanification(){
    if (this.style.headers){
      if ( !this.style.headers.borderRadius) { // nel caso sia ancora una stringa
        this.style.headers = JSON.parse(this.style.headers);
      }
    }

    if ( !this.style.palette.colors) { // nel caso sia ancora una stringa
      this.style.palette = JSON.parse(this.style.palette);
    }

    if (this.style.pages){
      if ( !this.style.pages[0].title) { // nel caso sia un oggetts
        this.style.pages = JSON.parse(this.style.pages);
      }
    }

    if (this.style.menu){
      if ( !this.style.menu.title) { // nel caso sia un oggetts
        this.style.menu = JSON.parse(this.style.menu);
      }
    }


  }

  userParameterStringify(){

    if ( this.style.headers.borderRadius) { // nel caso sia un oggetto
      this.style.headers = JSON.stringify(this.style.headers);
    }

    if ( this.style.palette.colors) { // nel caso sia un oggetts
      this.style.palette = JSON.stringify(this.style.palette);
    }

    if ( this.style.pages[0].title) { // nel caso sia un oggetts
      this.style.pages = JSON.stringify(this.style.pages);
    }

    if ( this.style.menu.title) { // nel caso sia un oggetts
      this.style.menu = JSON.stringify(this.style.menu);
    }
  }


  getService() {
    return new Promise( (resolve) => {
      this.getUserFromDB().then(() => {
        resolve(this.branch.services.items);
      });
    });
  }

  getAppfromDb(){
    return new Promise((resolve, reject) => {
      if (this.ownerAppId) {
        this.api.GetOwnerPro(this.ownerAppId).then(val => {
          const owner: any = val;
          this.app = owner.app;
          if (this.app) {
            this.style = owner.app.style;
            this.userParameterStringify();
            this.shop = owner.app.shop;
            if (owner.app.shop) {
              this.branch = owner.app.shop.branchs.items[0];
            }
          }
          this.show();

          resolve(true);
        });
      }else{
        console.error(this.ownerAppId);
        reject("[error] - onwer app id non esistente o non settato");
      }
    });
  }


}
