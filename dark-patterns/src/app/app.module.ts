import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './modules/components/landing-page/landing-page.component';
import {NgOptimizedImage} from "@angular/common";
import { InfoComponent } from './modules/components/info/info.component';
import { ArtenCarouselComponent } from './modules/components/arten-carousel/arten-carousel.component';
import { ArtenCardComponent } from './modules/components/arten-card/arten-card.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { DpDetailComponent } from './modules/components/dp-detail/dp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
    ArtenCarouselComponent,
    ArtenCardComponent,
    NavbarComponent,
    ArtenCardComponent,
    DpDetailComponent
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
