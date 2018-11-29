import { Person } from './../../../../SWAPI-old/src/app/results/people';
import { Component, OnInit } from '@angular/core';
import { Result, SwapiService } from '../swapi.service';
import { ResultsListComponent } from '../results-list/results-list.component';

@Component({
  selector: 'app-results-check',
  template: `
    <div>
      <table class="table table-hover table-dark">
       <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let result of resultCheckList">
          <td><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></td>
          <td>{{ result.name }}</td>
        </tr>
      </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./../app.component.css']
})
export class ResultsCheckComponent implements OnInit {

  resultCheckList: Person[];
  resultsListComponent: ResultsListComponent;
  result: Person;
  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.resultCheckList = this.swapiService.resultsListComponent.getChosenList();
  }

  getResult(url: string): Promise<Person> {
    return this.result = this.swapiService.getSingleResult(url).toPromise();
  }

}
