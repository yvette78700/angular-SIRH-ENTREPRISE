import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// les chemins sont defini du plus precis au moins
const routes: Routes = [

    // plan de navigation pour une url j associe un component

      {path: 'heroes',component:HeroesComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'detail/:id',component:HeroDetailComponent},
       // dasboard est defini comme page par defaut
      {path:'',redirectTo: '/dashboard',pathMatch:'full'}
 
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      // methode qui indique le plan de navigation a ngmodule
      exports: [RouterModule]
})

export class AppRoutingModule { }
