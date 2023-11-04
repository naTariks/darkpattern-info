import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './modules/selections/landing-page/landing-page.component';

import {NgOptimizedImage} from "@angular/common";
import { InfoComponent } from './modules/selections/info/info.component';
import { SlideshowComponent } from './modules/components/slideshow/slideshow.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
    SlideshowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
