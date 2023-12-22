import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/public-api';
import { Employee, EmployeeService } from '../employee-modal-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { house_images } from './dashboard-dummy-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource<Employee>([]);

  imgs = house_images;

  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployeesFromComponent().subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }

  getImage(house_id: string): string {
    const id = parseInt(house_id);
    const even_or_odd = id % 2; // returns 0 or 1
    const randomValue = Math.floor(Math.random() * 3); // generate random number between 0 and 2

    const image_position = even_or_odd + randomValue; // add the random value and the remainder
    return this.imgs[image_position].url;
  }

  openCard(name: String): void {
    console.log('Open: ' + name);
  }
}
