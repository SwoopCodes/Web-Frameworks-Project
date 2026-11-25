import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  appName = 'Car Builds';
  description = 'Car Builds is a web app for browsing custom car builds. Each build shows the car, its owner and its modifications.';
  author = 'Patryk Graszk';
}
