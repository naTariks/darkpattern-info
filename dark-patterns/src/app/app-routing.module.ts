import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteWrapperComponent } from './modules/website-wrapper/website-wrapper.component';

const routes: Routes = [
  { path: '', component: WebsiteWrapperComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
