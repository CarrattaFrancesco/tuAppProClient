import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  isSideNavbar = false;
  isBottomTabMenu = false;

  palette: any;
  primary: any;
  private contrast: any;

  headerBackgroundColor: any;
  textColor: any;
  headerBorderRadius: any;


  activePage;

  backUrl;

  // side bar
  mobileQuery: MediaQueryList;
  fillerNav = [];

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;


  constructor(private user: UserService, private route: ActivatedRoute, private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if ( this.user.getStyle()){

      this.createAppStyle();
    }else{
      this.user.getUser().then((r) => {
        console.log(this.user.getStyle());
        if (this.user.getStyle()){
          this.createAppStyle();
        }
      });
    }
  }

  private createAppStyle() {
    this.user.userParameterSanification();
    this.setNav();
    this.setPalette();
    this.setHeader();
    this.setMenu();
  }

  setNav(){
    let first = false;

    if (this.user.getStyle().pages && this.user.getStyle().pages.length > 0){
      this.fillerNav = [];
      this.user.getStyle().pages.forEach((val) => {
        if (!first) {
          this.activePage = val.title;
          first = true;
        }
        this.fillerNav.push(val);
      });
    }else{
      this.activePage = 'default Page';
      this.fillerNav.push({
        title : 'default Page',
        icon : 'home',
      });
    }

  }

  private setHeader() {

    if ( this.user.getStyle().headers){
      this.headerBorderRadius = this.user.getStyle().headers.borderRadius;
      this.textColor = this.contrast;
      if ( this.user.getStyle().headers.background){
        this.headerBackgroundColor = this.primary;
      }else{
        this.headerBackgroundColor = null;
      }
    }
  }

  private setPalette() {
    this.palette = this.user.getStyle().palette;
    this.primary = this.user.getStyle().palette.colors[0];
    this.contrast = this.user.getStyle().palette.contrastColor;
  }

  private setMenu(){
    if (!this.user.getStyle().menu){
      return;
    }
    switch (this.user.getStyle().menu.id) {
        case 1:
          this.isSideNavbar = true;
          break;
        case 2:
          this.isBottomTabMenu = true;
          break;
        default:
          console.error("[error] - il menu non è stato settato");
      }
  }

  back() {
    this.router.navigate([this.backUrl]);
  }

}
