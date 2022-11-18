import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [
  HeaderComponent,
  FooterComponent
]

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
  }
]

@NgModule({
  declarations: [...components, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [...components, RouterModule]
})
export class SharedModule { }
