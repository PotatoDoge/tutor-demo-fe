import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/v1/employees';
  private employees: Employee[] = [];
  private employeeListSubject = new BehaviorSubject<Employee[]>(this.employees);

  constructor(private httpClient: HttpClient) {
    this.getEmployees();
  }

  createEmployee(formData: any) {
    const url = `${this.baseUrl}`;
    return this.httpClient.post(url, formData);
  }

  private getEmployeesFromDatabase() {
    return this.httpClient.get(this.baseUrl);
  }

  private getEmployees() {
    this.getEmployeesFromDatabase().subscribe({
      next: (response: any) => {
        this.employees = response.data.employees;
        this.employeeListSubject.next(this.employees);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getEmployeesFromComponent(): Observable<Employee[]> {
    return this.employeeListSubject.asObservable();
  }

  initialEmployees() {
    return this.employees;
  }

  addEmployeeToComponent(employee: Employee) {
    this.employees.push(employee);
    this.employeeListSubject.next(this.employees);
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
