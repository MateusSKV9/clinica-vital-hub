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

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [
    CommonModule,
    ClearButtonComponent,
    RegisterButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css',
})
export class ExamFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder) {}

  initializeForm(): void {
    this.form = this.fb.group({
      patient: ['', [Validators.required]],
      examName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      examType: ['', [Validators.required]],
      value: ['', [Validators.required]],
      description: ['', [Validators.required]],
      materials: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
