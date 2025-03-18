import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Doctor } from '../../../interfaces/Doctor.interface';

@Component({
  selector: 'app-schedule-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './schedule-search.component.html',
  styleUrl: './schedule-search.component.css',
})
export class ScheduleSearchComponent {
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
      examType: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  getAllDoctors() {
    this.doctorService.getAll().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }
}
