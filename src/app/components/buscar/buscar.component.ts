import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
}
