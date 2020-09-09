import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import {MatSnackBarModule} from '@angular/material/snack-bar';

Amplify.configure(awsconfig);

import { AppComponent } from './app.component';
import { InitialLogoComponent } from './pages/initial-logo/initial-logo.component';
import { WelcomeSliderComponent } from './pages/welcome-slider/welcome-slider.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaletteComponent } from './components/palette/palette.component';


import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './test/main/main.component';
import { TabComponent } from './components/tab/tab.component';

import { PreviewComponent } from './pages/preview/preview.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ShopServicesComponent } from './pages/preview/shop-services/shop-services.component';
import { ShopProductsComponent } from './pages/preview/shop-products/shop-products.component';
import { ShopAppointmentsComponent } from './pages/preview/shop-appointments/shop-appointments.component';
import { Base64imagePipe } from './pipes/base64image.pipe';

import { ServiceBoxComponent } from './components/service-box/service-box.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialLogoComponent,
    WelcomeSliderComponent,
    SignInComponent,
    PaletteComponent,
    HeaderComponent,
    MainComponent,
    TabComponent,
    PreviewComponent,
    LoaderComponent,
    ShopServicesComponent,
    ShopProductsComponent,
    ShopAppointmentsComponent,
    Base64imagePipe,
    ServiceBoxComponent,
    AppointmentFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AmplifyUIAngularModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatRadioModule,
        MatIconModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        HttpClientModule,
        MatDialogModule,
        GooglePlaceModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
