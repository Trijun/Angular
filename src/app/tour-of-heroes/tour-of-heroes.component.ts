import { Component, OnInit } from '@angular/core';
import { Hero } from '../tour-of-heroes';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
