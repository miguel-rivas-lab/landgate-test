import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'landgate-ui-test';
  currentTheme = "dark";

  constructor() { }

  ngOnInit() { }

  getTheme($event) {
    this.currentTheme = $event
  }
}
