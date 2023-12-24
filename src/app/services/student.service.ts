import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/v1/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getStudentById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addStudent(student: Student): Observable<any> {
    console.log(student)
    return this.http.post<any>(this.baseUrl, student);
  }

  updateStudent(student: any): Observable<any> {
    const url = `${this.baseUrl}/${student.id}`;
    return this.http.put<any>(url, student);
  }

  deleteStudent(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

export interface Student {
  firstName: string;
  lastName: string;
  email: string;
}
