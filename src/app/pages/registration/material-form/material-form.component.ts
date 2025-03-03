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
import { Material } from '../../../interfaces/Material.interface';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    ClearButtonComponent,
    RegisterButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.css',
})
export class MaterialFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService
  ) {}

  initializeForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z0-9\s]+$/),
        ],
      ],
      stockQuantity: ['', [Validators.required, Validators.min(1)]],
      minStockQuantity: ['', [Validators.required, Validators.min(1)]],
      supplier: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const material = this.form.value as Material;
    this.materialService
      .create(material)
      .subscribe(() => console.log('Criado com sucesso!'));
  }
}
