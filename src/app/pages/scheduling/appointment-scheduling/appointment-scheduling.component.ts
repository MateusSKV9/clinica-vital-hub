import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Patient } from '../../../interfaces/Patient.interface';
import { Doctor } from '../../../interfaces/Doctor.interface';
import { PatientService } from '../../../services/patient/patient.service';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Material } from '../../../interfaces/Material.interface';
import { MaterialService } from '../../../services/material/material.service';

@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './appointment-scheduling.component.html',
  styleUrl: './appointment-scheduling.component.css',
})
export class AppointmentSchedulingComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
    this.getAllDoctors();
    this.getAllPatients();
  }

  patients: Patient[] = [];
  doctors: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {}

  initializeForm(): void {
    this.form = this.fb.group({
      doctor: ['', [Validators.required]],
      patient: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
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
}
