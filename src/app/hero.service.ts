
// la bibliotheque rxjs est tres important  car importe des observable et autrerxjs-dev.fribaseapp.com
// on simule le code avec la fonction of qu'on trouve dans rxjs
import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable,of}  from 'rxjs';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'//ici on l'injecte partout à partir de la racine
})

export class HeroService {

constructor(private messageService : MessageService) { }

  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

getHeroes():Observable< Hero[]>{
    this.messageService.add('HeroService:super je les ai trouvé')

    return of(HEROES);
}

// la requete avec Observable permet de la rence asynchrone

getHero(id: number): Observable<Hero>{
    this.messageService.add('HeroService:super !!')
    return of(HEROES.find(hero =>hero.id === id));
}
}
