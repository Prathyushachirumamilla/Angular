import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <app-comp1></app-comp1>
  <app-comp2></app-comp2>
  <app-comp3></app-comp3>

  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'encapsulation';
}
