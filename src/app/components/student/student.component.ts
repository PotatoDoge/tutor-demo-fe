import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentInfoModalComponent} from "../modals/student-info-modal/student-info-modal.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {}

  openStudentInfoModal() {
    this._dialog.open(StudentInfoModalComponent);
  }

}
