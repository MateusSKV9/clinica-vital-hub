import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css',
})
export class ExamFormComponent {}
