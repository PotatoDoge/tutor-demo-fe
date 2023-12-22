import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeInfoModalComponent } from './employee-info-modal/employee-info-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'employees-management-system-frontend';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private _dialog: MatDialog) {}

  openEmployeeInfoModal() {
    this._dialog.open(EmployeeInfoModalComponent);
  }

  onToggleSideNav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

export interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
