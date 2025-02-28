import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-exam-scheduling',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './exam-scheduling.component.html',
  styleUrl: './exam-scheduling.component.css',
})
export class ExamSchedulingComponent {}
