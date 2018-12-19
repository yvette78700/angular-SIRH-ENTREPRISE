import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service'
//j'importe le fichier hero de 
// import {HEROES} from '../mock-heroes';

@Component({//rajoute des info metadonné  ici ce sont des chemin
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero='yvette';

  // heroes=HEROES; le composant ne recupere pas les données c'est le service
  heroes : Hero[];
  hero: Hero={//ici je met le type et l'initialise
    id:1,
    name:'yvette',
    age:34
  };

  // selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero =hero; 
  }

  getHeroes():void{
// this.heroes = this.heroService.getHeroes();
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes );
//  subscribe met les flux a jour quand il arrive, getHeroes fait appel a lui
  }
  // on injecte les fonction comme ci dessous
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
     // des que l'app est lance va me recuperer les donnés
   
  }

}
