import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themes = {
    0: "dark",
    1: "light",
  }
  currentTheme = false;
  @Output() themeEvent = new EventEmitter<string>();

  constructor() { }

  booleanToInteger(value) {
    return value ? 1 : 0
  }

  setTheme() {
    this.currentTheme = !this.currentTheme;
    let index = this.booleanToInteger(this.currentTheme);
    this.themeEvent.emit(this.themes[index]);
  }
}
