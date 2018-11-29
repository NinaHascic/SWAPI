import { Planet } from './../result/planets';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { SwapiService } from './../swapi.service';
import { Person } from './../result/people';
import { Result } from './../swapi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-results-list',
  template: `
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-dark" (click)="showPeople()">people</button>
      <button type="button" class="btn btn-dark" (click)="showPlanets()">planets</button>
      <button type="button" class="btn btn-dark">films</button>
      <button type="button" class="btn btn-dark">species</button>
      <button type="button" class="btn btn-dark">starships</button>
      <button type="button" class="btn btn-dark">vehicles</button>
    </div>
  </div>
  <div>
  <table class="table table-hover table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">homeworld</th>
      <th scope="col">species</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody *ngIf="people">
    <tr *ngFor="let result of people" >
      <th scope="row"></th>
      <td>{{ result.name }}</td>
      <td>{{ result.homeworld }}</td>
      <td>{{ result.species }}</td>
      <td><button type="button" class="btn btn-outline-warning addToView" (click)="chooseSingleResult(result.url)">add</button></td>
    </tr>
  </tbody>
  <tbody *ngIf="planets">
  <tr *ngFor="let result of planets" >
    <th scope="row"></th>
    <td>{{ result.name }}</td>
    <td>{{ result.climate }}</td>
    <td>{{ result.terrain }}</td>
    <td><button type="button" class="btn btn-outline-warning addToView" (click)="chooseSingleResult(result.url)">add</button></td>
  </tr>
</tbody>
</table>
</div>
  `,
  styleUrls: [ './../app.component.css' ]
})
export class ResultsListComponent implements OnInit {

  people: Person[];
  planets: Planet[];
  chosenList: Result[];

  constructor(private swapiService: SwapiService) { }

  showPeople() {
     this.swapiService.getPeople();
     this.people = this.swapiService.people;
  }

  showPlanets() {
    this.swapiService.getPlanets();
    this.planets = this.swapiService.planets;
  }


  ngOnInit() {
    this.showPeople();
    $('.addToView').click(function (e) {
      this.parentNode.parentNode.style.display = 'none';
    });
  }

  chooseSingleResult(url: string): Promise<Result[]> {
    return this.swapiService.getSingleResult(url).toPromise().push();
  }


  getChosenList() {
    return this.chosenList;
  }


}
