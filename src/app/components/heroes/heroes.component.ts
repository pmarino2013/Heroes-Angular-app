import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importo para poder enviar parámetros
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    console.log('constructor');
  }

  //ciclo de vida
  //Cuando el componente se monta
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]); //Para enviar parámetros a otra url
  }
}
