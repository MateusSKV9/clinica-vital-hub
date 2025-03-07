import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Appointment } from '../../interfaces/Appointment.interface';
import { Exam } from '../../interfaces/Exam.interface';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  apiUrl = environment.apiUrl;
  private examEndpoint = `${this.apiUrl}/exams`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.examEndpoint);
  }

  getOne(id: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.examEndpoint}/${id}`);
  }

  create(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.examEndpoint, exam);
  }
}
