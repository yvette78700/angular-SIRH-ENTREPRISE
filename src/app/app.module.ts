import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';//ngmodel est un module de FormsModule (bibliotheque) 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
      declarations: [
        AppComponent,//declaration par defaut
        HeroesComponent,
        HeroDetailComponent, 
        VoterComponent, 
        VotetakerComponent, MessagesComponent, DashboardComponent//declararation du composant une fois creer
        // le ng generate component creer 3 fichiers le .ts,.css et le .html 
      ],

      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
      ],

      providers: [],
      bootstrap: [AppComponent]
})

export class AppModule { }
