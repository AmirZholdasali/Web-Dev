import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>

    <button (click)="changeTitle()">Click me</button>
  `,
})
export class AppComponent {
  title = 'My First Angular App';

  changeTitle() {
    this.title = 'You clicked the button!';
  }
}