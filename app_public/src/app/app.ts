import { Component } from '@angular/core';
import { About } from './about/about';

@Component({
  imports: [About],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
