import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private baseUrl = 'http://localhost:8080/v1/tutors';

  constructor(private http: HttpClient) { }

  getTutors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTutorById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTutor(tutor: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, tutor);
  }

  updateTutor(tutor: any): Observable<any> {
    const url = `${this.baseUrl}/${tutor.id}`;
    return this.http.put<any>(url, tutor);
  }

  deleteTutor(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
