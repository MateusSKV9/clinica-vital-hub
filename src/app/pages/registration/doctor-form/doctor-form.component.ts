import { Component, OnInit } from '@angular/core';
import { AddressFormComponent } from '../../../components/shared/address-form/address-form.component';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [
    AddressFormComponent,
    ClearButtonComponent,
    RegisterButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css',
})
export class DoctorFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder) {}

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      specialty: ['', [Validators.required]],
      crm: ['', [Validators.required]],
      consultationHours: ['', [Validators.required]],
      valueAppointment: ['', [Validators.required]],
      contat: ['', [Validators.required]],
    });
  }

  onSubmit() {}
}
