import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  apiUrl = environment.apiUrl;
  private patientEndpoint = `${this.apiUrl}/patients`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientEndpoint);
  }

  getOne(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientEndpoint}/${id}`);
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientEndpoint, patient);
  }
}
