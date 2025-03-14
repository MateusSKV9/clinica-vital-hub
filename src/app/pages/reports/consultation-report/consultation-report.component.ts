import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Appointment } from '../../../interfaces/Appointment.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultation-report',
  standalone: true,
  imports: [
    ClearButtonComponent,
    RegisterButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './consultation-report.component.html',
  styleUrl: './consultation-report.component.css',
})
export class ConsultationReportComponent implements OnInit {
  form!: FormGroup;
  appointments: Appointment[] = [];
  groupedAppointments: { [key: string]: Appointment[] } = {};

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      period: ['', [Validators.required]],
      appointmentType: ['', [Validators.required]],
    });
  }

  onSubmit() {
    switch (this.form.get('period')?.value) {
      case 'mensal':
        this.getMonthly();
        break;
      case 'trimestral':
        this.getQuarterly();
        break;
      case 'semestral':
        this.getBiannual();
        break;
      case 'anual':
        this.getAnnual();
        break;
    }
  }

  getAnnual(): void {
    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments;
      this.groupByPeriod(12);
    });
  }

  getBiannual(): void {
    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments;
      this.groupByPeriod(6);
    });

    console.log(this.groupedAppointments);
  }

  getQuarterly(): void {
    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments;
      this.groupByPeriod(3);
    });
  }

  getMonthly(): void {
    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments;
      this.groupByPeriod(1);
    });
  }

  private groupByPeriod(periodSize: number): void {
    this.groupedAppointments = {};
    const sections = 12 / periodSize;

    for (let i = 0; i < sections; i++) {
      const startMonth = i * periodSize + 1;
      const endMonth = startMonth + periodSize - 1;

      const sectionLabel =
        startMonth <= 9 && endMonth <= 9
          ? `0${startMonth} - 0${endMonth}`
          : `${startMonth} - ${endMonth}`;
      this.groupedAppointments[sectionLabel] = this.appointments.filter(
        (appointment) => {
          const appointmentMonth = parseInt(appointment.date.split('-')[1], 10);
          return appointmentMonth >= startMonth && appointmentMonth <= endMonth;
        }
      );
    }
  }
}
