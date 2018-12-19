import { Component, OnInit,Input } from '@angular/core';//declaration du decorateur Input
import{Hero} from '../hero';
import{HeroService} from '../hero.service';
import {Location} from '@angular/common';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input()  
      hero:Hero;//ici le input envoi Hero venant du pere
    // ActivatedRoute permet d'exploiter l url
      constructor(private heroService: HeroService,private route: ActivatedRoute,private location:Location) { }

      ngOnInit() {
        this.getHero();
      }

      getHero(): void{
        const id = +this.route.snapshot.paramMap.get('id');
        // en rajoutant le + on le covertit en nombre


        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
      }
      goBack():void {
        this.location.back();
      }
}
