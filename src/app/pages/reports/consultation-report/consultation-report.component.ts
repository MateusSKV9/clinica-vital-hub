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

  anosComConsultas: number[] = [];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.carregarConsultas();

    this.form = this.fb.group({
      period: ['', [Validators.required]],
      appointmentType: [''],
      year: ['', [Validators.required]],
    });
  }

  get year(): string {
    return this.form.get('year')?.value;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

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
    const ano = Number(this.year);

    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments.filter((appointment) => {
        const dateAppointment = new Date(appointment.date);
        return dateAppointment.getUTCFullYear() === ano;
      });

      this.groupByPeriod(12);
    });
  }

  getBiannual(): void {
    const ano = Number(this.year);

    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments.filter((appointment) => {
        const dateAppointment = new Date(appointment.date);
        return dateAppointment.getUTCFullYear() === ano;
      });

      this.groupByPeriod(6);
    });
  }

  getQuarterly(): void {
    const ano = Number(this.year);

    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments.filter((appointment) => {
        const dateAppointment = new Date(appointment.date);
        return dateAppointment.getUTCFullYear() === ano;
      });

      this.groupByPeriod(3);
    });
  }

  getMonthly(): void {
    const ano = Number(this.year);

    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointments = appointments.filter((appointment) => {
        const dateAppointment = new Date(appointment.date);
        return dateAppointment.getUTCFullYear() === ano;
      });

      this.groupByPeriod(1);
    });
  }
  groupedAppointments: { [key: string]: Appointment[] } = {};

  private groupByPeriod(periodSize: number): void {
    this.groupedAppointments = {};
    const sections = Math.ceil(12 / periodSize);

    for (let i = 0; i < sections; i++) {
      const startMonth = i * periodSize;
      const endMonth = Math.min(startMonth + periodSize - 1, 11); 

      const sectionLabel = `${String(startMonth + 1).padStart(
        2,
        '0'
      )} - ${String(endMonth + 1).padStart(2, '0')}`;

      this.groupedAppointments[sectionLabel] = this.appointments.filter(
        (appointment) => {
          const appointmentMonth = new Date(appointment.date).getUTCMonth();
          return appointmentMonth >= startMonth && appointmentMonth <= endMonth;
        }
      );
    }
  }

  carregarConsultas() {
    this.appointmentService.getAll().subscribe((appointments) => {
      appointments.forEach((appointment) => {
        const anoConsulta = new Date(appointment.date).getUTCFullYear();
        console.log(
          'Data do compromisso:',
          appointment.date,
          'Ano da consulta:',
          anoConsulta
        );

        if (!this.anosComConsultas.includes(anoConsulta)) {
          this.anosComConsultas.push(anoConsulta);
        }
      });
      console.log('Anos com consultas', this.anosComConsultas);
    });
  }
}
