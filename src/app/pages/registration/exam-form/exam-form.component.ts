import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent, ReactiveFormsModule],
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
      examName: ['', [Validators.required]],
      examType: ['', [Validators.required]],
      value: ['', [Validators.required]],
      description: ['', [Validators.required]],
      materials: ['', [Validators.required]],
    });
  }

  onSubmit() {}
}
