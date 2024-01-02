import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './modules/components/landing-page/landing-page.component';

import {NgOptimizedImage} from "@angular/common";
import { InfoComponent } from './modules/components/info/info.component';
import { SlideshowComponent } from './modules/components/slideshow/slideshow.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ArtenCardComponent } from './modules/components/arten-card/arten-card.component';
import { PraxisComponent } from './modules/components/praxis/praxis.component';
import { RechtlichComponent } from './modules/components/rechtlich/rechtlich.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { ModalComponent } from './shared-modules/components/modal/modal.component';
import { ModalBodyComponent } from './shared-modules/components/modal-body/modal-body.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
    SlideshowComponent,
    NavbarComponent,
    ArtenCardComponent,
    PraxisComponent,
    RechtlichComponent,
    FooterComponent,
    ModalComponent,
    ModalBodyComponent
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
