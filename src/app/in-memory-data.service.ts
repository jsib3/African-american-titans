import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Barack Obama' },
      { id: 12, name: 'Martin Luther King Jr.'},
      { id: 13, name: 'Malcolm X' },
      { id: 14, name: 'Rosa Parks' },
      { id: 15, name: 'Frederick Douglass' },
      { id: 16, name: 'W.E.B Du Bois' },
      { id: 17, name: 'Langston Hughes' },
      { id: 18, name: 'Maya Angelou' },
      { id: 19, name: 'Benjamin Banneker' },
      { id: 20, name: 'Shirley Chisholm' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}