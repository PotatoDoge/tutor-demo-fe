import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentInfoModalComponent} from "../modals/student-info-modal/student-info-modal.component";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "../../employee-modal-service.service";
import {Student, StudentService} from "../../services/student.service";
import {house_images} from "../../dashboard/dashboard-dummy-data";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  dataSource = new MatTableDataSource<Student>([]);
  imgs = house_images;
  constructor(private _dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentsFromComponent().subscribe((students) => {
      this.dataSource.data = students;
    });
  }

  getImage(student_id: string): string {
    const id = parseInt(student_id);
    const even_or_odd = id % 2; // returns 0 or 1
    const randomValue = Math.floor(Math.random() * 3); // generate random number between 0 and 2

    const image_position = even_or_odd + randomValue; // add the random value and the remainder
    return this.imgs[image_position].url;
  }

  openStudentInfoModal() {
    this._dialog.open(StudentInfoModalComponent);
    console.log(this.dataSource.data)
  }

}
