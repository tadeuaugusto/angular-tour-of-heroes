import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { moveEmbeddedView } from '@angular/core/src/view';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./../heroes/heroes.component.output.min.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  runJsTest(): void {
    console.log('printing the name of the heroes.. ');
    this.heroes.forEach(function(hero) {
      console.log(hero.name);
    });
  }

  runJsTestx(): void {
    this.heroes.forEach(hero => console.log('runJsTestx ' + hero.id));
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  
}
