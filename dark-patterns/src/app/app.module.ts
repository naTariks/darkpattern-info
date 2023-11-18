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
import { WebsiteWrapperComponent } from './modules/website-wrapper/website-wrapper.component';
import { DataService } from './modules/service/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
    SlideshowComponent,
    NavbarComponent,
    WebsiteWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  exports: [
    LandingPageComponent,
    InfoComponent,
    SlideshowComponent,
    NavbarComponent,
    WebsiteWrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
