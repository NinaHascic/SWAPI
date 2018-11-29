import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './result/people';
import { Planet } from './result/planets';

export class Result {
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) { }

  readonly ROOT_URL = 'https://swapi.co/api/';
  people: Person[];
  planets: Planet[];
  result: Result;

  getPeople() {
    this.httpClient.get<Person[]>(this.ROOT_URL + 'people/').subscribe(persons => this.people = persons);
  }
  getPeoplePromise(): Promise<Person[]> {
    console.log('PPL promise');
    return this.httpClient.get<Person[]>(this.ROOT_URL + 'people/').toPromise();
  }

  getSingleResult(url: string): Promise<Result> {
    return this.httpClient.get<Result>(url).toPromise();
  }

  getPlanets() {
    this.httpClient.get<Planet[]>(this.ROOT_URL + 'planets/').subscribe(planets => this.planets = planets);
  }


}
