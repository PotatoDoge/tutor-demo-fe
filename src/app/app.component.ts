import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tutor-demo-fe';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private _dialog: MatDialog) {}

  onToggleSideNav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

export interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
