import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // This is a typical "service-in-service" scenario:
  // you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    // send the message
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    return of(HEROES);
  }
}
