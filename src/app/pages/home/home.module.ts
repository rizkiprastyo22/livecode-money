import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeBannerComponent } from './banner/home-banner.component';
import { HomeServiceComponent } from './service/home-service.component';
import { HomeAdvantagesComponent } from './advantages/home-advantages.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeServiceComponent,
    HomeAdvantagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
