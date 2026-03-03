import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Welcome to Album Browser</h1>
    <button routerLink="/albums">Browse Albums</button>
  `
})
export class HomeComponent {}
