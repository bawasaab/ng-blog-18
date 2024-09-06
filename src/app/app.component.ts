import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonAppModule } from './common-app-module/common-app.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonAppModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-demo';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSmallScreen: boolean = false;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    // Subscribe to screen size changes
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  // Optionally, you can add a toggle method
  toggleSidenav() {
    this.sidenav.toggle();
  }

  selectedMenu: string = '';

  // Method to handle menu click and update content
  onMenuClick(menu: string) {
    this.selectedMenu = menu;
  }
}
