import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../../employee-modal-service.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-student-info-modal',
  templateUrl: './student-info-modal.component.html',
  styleUrls: ['./student-info-modal.component.css']
})
export class StudentInfoModalComponent {

  color: ThemePalette = 'primary';
  checked = false;
  empForm: FormGroup;
  snackBarDurationInSeconds = 5;
  shouldCloseDialog = false;

  constructor(
    private _fb: FormBuilder,
    private studentService: StudentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this.addStudent(this.empForm.valid)
    }
  }

  private addStudent(formData: any) {
    this.studentService.addStudent(this.empForm.value).subscribe({
      next: (response: any) => {
        this.dialog.closeAll();
        this.openSnackBar('Student created successfully!', 'success-snackbar');
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
