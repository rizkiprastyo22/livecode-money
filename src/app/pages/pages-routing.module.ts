import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { AboutComponent } from "./about/about.component";
import { ArticlesComponent } from "./articles/articles.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}