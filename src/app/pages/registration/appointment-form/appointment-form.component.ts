import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { Appointment } from '../../../interfaces/Appointment.interface';
import { Patient } from '../../../interfaces/Patient.interface';
import { Doctor } from '../../../interfaces/Doctor.interface';
import { PatientService } from '../../../services/patient/patient.service';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Material } from '../../../interfaces/Material.interface';
import { MaterialService } from '../../../services/material/material.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [
    CommonModule,
    ClearButtonComponent,
    RegisterButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent implements OnInit {
  form!: FormGroup;
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  materials: Material[] = [];

  ngOnInit(): void {
    this.initializeForm();
    this.getAllDoctors();
    this.getAllPatients();
    this.getAllMaterials();
  }

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private materialService: MaterialService
  ) {}

  initializeForm(): void {
    this.form = this.fb.group({
      doctor: ['', [Validators.required]],
      patient: ['', [Validators.required]],
      appointmentType: ['', [Validators.required]],
      complaint: ['', [Validators.required]],
      healthInsurance: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      materials: ['', [Validators.required]],
      observations: [''],
    });
  }

  onSubmit() {
    console.log('entrou');
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('deu erro');
      return;
    }

    const appointment = this.form.value as Appointment;
    this.appointmentService
      .create(appointment)
      .subscribe(() => console.log('Consulta cadastrada!', appointment));
  }

  getAllPatients(): void {
    this.patientService
      .getAll()
      .subscribe((patients) => (this.patients = patients));
  }

  getAllDoctors(): void {
    this.doctorService
      .getAll()
      .subscribe((doctors) => (this.doctors = doctors));
  }

  getAllMaterials(): void {
    this.materialService
      .getAll()
      .subscribe((materials) => (this.materials = materials));
  }
}
