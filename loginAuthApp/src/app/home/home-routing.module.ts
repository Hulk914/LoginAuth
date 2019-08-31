import { ApplicationPageComponent } from './application-page/application-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: NavbarComponent
  },
  {
    path: 'app',
    component: ApplicationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
