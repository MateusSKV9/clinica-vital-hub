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
import { Doctor } from '../../../interfaces/Doctor.interface';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [
    CommonModule,
    NgxMaskDirective,
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

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {}

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
      specialty: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      crm: ['', [Validators.required]],
      consultationHours: ['', [Validators.required]],
      valueAppointment: ['', [Validators.required, Validators.min(1)]],
      contat: ['', [Validators.required]],

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

    const doctor = this.form.value as Doctor;
    this.doctorService
      .create(doctor)
      .subscribe(() => console.log('Médico cadastrado!', doctor));
  }

  get formAddress(): FormGroup {
    return this.form.get('formAddress') as FormGroup;
  }
}
