import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ApplicationPageComponent } from './application-page/application-page.component';

@NgModule({
  declarations: [NavbarComponent, ApplicationPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
