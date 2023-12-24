import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/v1/students';
  private students: Student[] = [];
  private studentListSubject = new BehaviorSubject<Student[]>(this.students);

  constructor(private http: HttpClient) {
    this.fillStudentsList();
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  private fillStudentsList(){
    this.getStudents().subscribe({
      next: (response: any) => {
        this.students = response.data.students;
        this.studentListSubject.next(this.students);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getStudentById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addStudent(student: Student): Observable<any> {
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

  getStudentsFromComponent(): Observable<Student[]> {
    return this.studentListSubject.asObservable();
  }

  addStudentToComponent(student: Student) {
    this.students.push(student);
    this.studentListSubject.next(this.students);
  }

}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
