import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { AboutInfoComponent } from './info/about-info.component';
import { AboutVisionComponent } from './vision/about-vision.component';
import { AboutContactComponent } from './contact/about-contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutInfoComponent,
    AboutVisionComponent,
    AboutContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AboutModule { }
