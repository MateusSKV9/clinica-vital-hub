import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Appointment } from '../interfaces/Appointment.interface';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiUrl = environment.apiUrl;
  private appointmentEndpoint = `${this.apiUrl}/appointments`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentEndpoint);
  }

  getOne(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.appointmentEndpoint}/${id}`);
  }

  create(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.appointmentEndpoint, appointment);
  }
}
