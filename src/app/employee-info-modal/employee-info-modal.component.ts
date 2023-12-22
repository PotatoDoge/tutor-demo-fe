import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { EmployeeService } from '../employee-modal-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-info-modal',
  templateUrl: './employee-info-modal.component.html',
  styleUrls: ['./employee-info-modal.component.css'],
})
export class EmployeeInfoModalComponent {
  color: ThemePalette = 'primary';
  checked = false;
  empForm: FormGroup;
  snackBarDurationInSeconds = 5;
  shouldCloseDialog = false;

  constructor(
    private _fb: FormBuilder,
    private employeeModalService: EmployeeService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      role: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this.createEmployee(this.empForm.value);
    }
  }

  private createEmployee(formData: any) {
    this.employeeModalService.createEmployee(formData).subscribe({
      next: (response: any) => {
        this.employeeModalService.addEmployeeToComponent(
          response.data.employee
        );
        this.dialog.closeAll();
        this.openSnackBar('Employee created succesfully!', 'success-snackbar');
      },
      error: (error) => {
        console.log(error);
        this.openSnackBar('Error!', 'error-snackbar');
      },
    });
  }

  openSnackBar(message: string, snackbar_style: string) {
    this.snackBar.open(message, '', {
      duration: 2500,
      panelClass: [snackbar_style],
    });
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
