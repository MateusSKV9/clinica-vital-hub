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
import { ExamService } from '../../../services/exam/exam.service';
import { Exam } from '../../../interfaces/Exam.interface';
import { Patient } from '../../../interfaces/Patient.interface';
import { PatientService } from '../../../services/patient/patient.service';
import { MaterialService } from '../../../services/material/material.service';
import { Material } from '../../../interfaces/Material.interface';

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
  patients: Patient[] = [];
  materials: Material[] = [];

  ngOnInit(): void {
    this.initializeForm();
    this.getAllPatients();
    this.getAllMaterials();
  }

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private patientService: PatientService,
    private materialService: MaterialService
  ) {}

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

    const exam = this.form.value as Exam;
    this.examService
      .create(exam)
      .subscribe(() => console.log('Exame cadastrado', exam));
  }

  getAllPatients(): void {
    this.patientService
      .getAll()
      .subscribe((patients) => (this.patients = patients));
  }

  getAllMaterials(): void {
    this.materialService
      .getAll()
      .subscribe((materials) => (this.materials = materials));
  }
}
