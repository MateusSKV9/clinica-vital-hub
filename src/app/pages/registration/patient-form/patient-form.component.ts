import { Component, OnInit } from '@angular/core';
import { AddressFormComponent } from '../../../components/shared/address-form/address-form.component';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../interfaces/patient.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    AddressFormComponent,
    RegisterButtonComponent,
    ClearButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {}

  initializeForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      dateOfBirth: ['', [Validators.required]],
      bloodType: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      healthInsurance: ['', [Validators.required]],
      height: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      medicalHistory: ['', [Validators.required]],

      formAddress: this.fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: ['', Validators.required],
        complement: [''],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        state: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const patient = this.form.value as Patient;
    this.patientService
      .create(patient)
      .subscribe(() => console.log('Paciente cadastrado!'));
  }

  get formAddress(): FormGroup {
    return this.form.get('formAddress') as FormGroup;
  }
}
