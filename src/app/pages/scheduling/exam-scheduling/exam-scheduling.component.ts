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
  selector: 'app-exam-scheduling',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './exam-scheduling.component.html',
  styleUrl: './exam-scheduling.component.css',
})
export class ExamSchedulingComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder) {}

  initializeForm(): void {
    this.form = this.fb.group({
      patient: ['', [Validators.required]],
      examType: ['', [Validators.required]],
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
