import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-input',
  template: `
    <form>
    <div class="form-group">
      <p>
        <label for="title"> Titel:</label>
          <input type="title"  name="title" placeholder="Titel" >
      </p>
      </div>

      <div class="form-group">
      <p>
        <label for="text"> Text: </label>
        <textarea type="text"  name="text" placeholder="Plot"> </textarea>
      </p>
      </div>
    </form>
  `,
  styleUrls: ['./../app.component.css']
})
export class ResultsInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
