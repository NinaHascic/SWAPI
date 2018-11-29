import { Result, SwapiService } from './../swapi.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ResultsListComponent } from '../results-list/results-list.component';

@Component({
  selector: 'app-results-view',
  template: `
  <div *ngIf="chosenList">
  <h3>you chose:</h3>
  <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let result of resultList">
      <td>{{ result.name }}</td>
      <td><button type="button" class="btn btn-warning deleteRow" >remove</button></td>
    </tr>
  </tbody>
</table>
<button type="button" class="btn btn-warning" (click)="fillChosenList()">ready</button>
</div>
  `,
  styleUrls: ['./../app.component.css']
})
export class ResultsViewComponent implements OnInit {

  chosenList: Result[];
  resultList: ResultsListComponent;
  constructor() { }

  ngOnInit() {
    $('.deleteRow').click(function (e) {
      this.parentNode.parentNode.style.display = 'none';
    });
  }

  fillChosenList() {
    this.chosenList = this.resultList.getChosenList();
  }


}
