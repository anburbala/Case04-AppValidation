import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-templatedriven></app-templatedriven>  <hr> <app-reactiveform></app-reactiveform>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Case04-AppValidation';
}
