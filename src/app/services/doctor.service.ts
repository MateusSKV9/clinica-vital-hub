import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Doctor } from '../interfaces/Doctor.interface';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  apiUrl = environment.apiUrl;
  private doctorEndpoint = `${this.apiUrl}/doctors`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorEndpoint);
  }

  getOne(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.doctorEndpoint}/${id}`);
  }

  create(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.doctorEndpoint, doctor);
  }
}
