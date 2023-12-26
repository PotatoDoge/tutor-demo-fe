import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import {SubjectLevelService} from "../../../services/subjectLevel.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent{
  color: ThemePalette = 'primary';
  checked = false;
  empForm: FormGroup;
  snackBarDurationInSeconds = 5;
  shouldCloseDialog = false;
  options = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    // Add more options as needed
  ];
  subjects:String[] = []
  levels:String[] = []

  constructor(
    private _fb: FormBuilder,
    private studentService: StudentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private subjectLevelService: SubjectLevelService
  ) {
    this.empForm = this._fb.group({
      subjectOption: '',
      levelOption: '',
      studentId: '',
      selectedOption: ['']
    });
  this.getSubjectAndLevelSets();
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      // Process form data here
      console.log(this.empForm.value);
      // You can also call your service methods to save data here
      // this.studentService.saveStudent(this.empForm.value).subscribe(/* Handle response */);
      // Optionally, close the dialog after form submission
      // this.dialog.closeAll();
    } else {
      // Handle invalid form
      console.log('Invalid form');
      this.openSnackBar('Please fill all required fields', 'error-snackbar'); // Show error message
    }
  }

  openSnackBar(message: string, snackbar_style: string) {
    this.snackBar.open(message, '', {
      duration: this.snackBarDurationInSeconds * 1000,
      panelClass: [snackbar_style],
    });
  }

  // Assuming your method is inside a class
  private getSubjectAndLevelSets() {
    this.subjectLevelService.getSubjectLevels().subscribe(
      (response) => {
        this.subjects = Array.from(new Set(response.data.subjectLevels.map(item => item.subject)));
        this.levels = Array.from(new Set(response.data.subjectLevels.map(item => item.level)));
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

}
