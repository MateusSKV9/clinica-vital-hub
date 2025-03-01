import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder) {}

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
      observations: ['', [Validators.required]],
    });
  }

  onSubmit() {}
}
