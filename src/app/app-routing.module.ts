import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitialLogoComponent} from './pages/initial-logo/initial-logo.component';
import {WelcomeSliderComponent} from './pages/welcome-slider/welcome-slider.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {MainComponent} from './test/main/main.component';
import {PreviewComponent} from './pages/preview/preview.component';




const routes: Routes = [
  { path: '', component: InitialLogoComponent },
  { path: 'welcome', component: WelcomeSliderComponent },
  { path: 'signIn', component: SignInComponent },


  { path: 'preview', component: PreviewComponent }, // user preview

  { path: 'test', component: MainComponent }, // for testing

]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
