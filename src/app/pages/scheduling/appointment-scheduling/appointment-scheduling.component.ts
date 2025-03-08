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
  }

  constructor(private fb: FormBuilder) {}

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
}
