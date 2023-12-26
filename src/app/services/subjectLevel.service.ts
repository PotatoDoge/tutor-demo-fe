import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Student} from "./student.service";

@Injectable({
  providedIn: 'root'
})
export class SubjectLevelService {
  private baseUrl = 'http://localhost:8080/v1/subjects';
  constructor(private http: HttpClient) {}

  getSubjectLevels(): Observable<SubjectLevelsResponse> {
    const url = `${this.baseUrl}/level`;
    return this.http.get<SubjectLevelsResponse>(url);
  }

}

interface SubjectLevel {
  subject: string;
  level: string;
}

interface SubjectLevelsResponse {
  timestamp: string;
  statusCode: number;
  status: string;
  message: string;
  data: {
    subjectLevels: SubjectLevel[];
  };
}
