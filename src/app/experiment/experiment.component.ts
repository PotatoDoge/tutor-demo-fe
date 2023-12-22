import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeInfoModalComponent } from '../employee-info-modal/employee-info-modal.component';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css'],
})
export class ExperimentComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  openEmployeeInfoModal() {
    this._dialog.open(EmployeeInfoModalComponent);
  }
}
