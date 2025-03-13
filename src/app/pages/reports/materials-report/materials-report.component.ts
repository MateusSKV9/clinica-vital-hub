import { Component, OnInit } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';
import { MaterialService } from '../../../services/material/material.service';
import { Material } from '../../../interfaces/Material.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-materials-report',
  standalone: true,
  imports: [RegisterButtonComponent, ClearButtonComponent, ReactiveFormsModule],
  templateUrl: './materials-report.component.html',
  styleUrl: './materials-report.component.css',
})
export class MaterialsReportComponent implements OnInit {
  form!: FormGroup;
  materials!: Material[];

  constructor(
    private materialService: MaterialService,
    private fb: FormBuilder
  ) {
    this.getMaterials();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      period: ['', [Validators.required]],
      materialType: ['', [Validators.required]],
      format: [''],
    });
  }

  onSubmit() {}

  getMaterials(): void {
    this.materialService
      .getAll()
      .subscribe((materials) => (this.materials = materials));
  }
  
}
