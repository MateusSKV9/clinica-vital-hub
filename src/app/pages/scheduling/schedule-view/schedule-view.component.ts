import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../interfaces/Doctor.interface';
import { DoctorService } from '../../../services/doctor/doctor.service';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClearButtonComponent,
    RegisterButtonComponent,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css',
})
export class ScheduleViewComponent implements OnInit {
  form!: FormGroup;
  doctors: Doctor[] = [];

  ngOnInit(): void {
    this.initializeForm();
    this.getAllDoctors();
  }

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {}

  initializeForm(): void {
    this.form = this.fb.group({
      doctor: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  getAllDoctors(): void {
    this.doctorService
      .getAll()
      .subscribe((doctors) => (this.doctors = doctors));
  }
}
