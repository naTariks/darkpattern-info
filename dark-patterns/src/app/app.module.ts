import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LandingPageComponent} from './modules/sections/landing-page/landing-page.component';

import {NgOptimizedImage} from "@angular/common";
import {InfoComponent} from './modules/sections/info/info.component';
import {SlideshowComponent} from './modules/components/slideshow/slideshow.component';
import {NavbarComponent} from './modules/components/navbar/navbar.component';
import { WebsiteWrapperComponent } from './modules/website-wrapper/website-wrapper.component';
import { DataService } from './modules/service/data.service';
import {ArtenCardComponent} from './modules/components/arten-card/arten-card.component';
import {FooterComponent} from './modules/components/footer/footer.component';
import {ModalComponent} from './shared-modules/components/modal/modal.component';
import {ModalBodyComponent} from './shared-modules/components/modal-body/modal-body.component';
import {KeepHtmlPipe} from "./shared-modules/models/pipes/keep-html.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
    SlideshowComponent,
    NavbarComponent,
    WebsiteWrapperComponent,
    ArtenCardComponent,
    FooterComponent,
    ModalComponent,
    ModalBodyComponent,
    KeepHtmlPipe
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
