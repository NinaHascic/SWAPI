import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import { ResultsCheckComponent } from './results-check/results-check.component';
import { ResultsInputComponent } from './results-input/results-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ResultsListComponent,
    ResultsViewComponent,
    ResultsCheckComponent,
    ResultsInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
