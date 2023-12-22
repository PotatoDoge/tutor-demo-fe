import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';
import { EmployeeService } from '../employee-modal-service.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class EmployeesTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'role'];
  dataSource = new MatTableDataSource<Employee>([]);

  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployeesFromComponent().subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
