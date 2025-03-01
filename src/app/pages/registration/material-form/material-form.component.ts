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
  selector: 'app-material-form',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent, ReactiveFormsModule],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.css',
})
export class MaterialFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder) {}

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      stockQuantity: ['', [Validators.required]],
      minStockQuantity: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  onSubmit() {}
}
