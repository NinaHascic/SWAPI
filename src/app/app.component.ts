import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to the Star Wars plot generator!</h1>
  <h2>Browse through the resources to find your components:</h2>
  <app-results-list></app-results-list>
  <app-results-view></app-results-view>
  <app-results-check></app-results-check>
  <app-results-input></app-results-input>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'SWAPI';
}
