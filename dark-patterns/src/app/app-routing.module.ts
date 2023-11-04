import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./modules/components/landing-page/landing-page.component";
import {DpDetailComponent} from "./modules/components/dp-detail/dp-detail.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'product/:id', component: DpDetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
