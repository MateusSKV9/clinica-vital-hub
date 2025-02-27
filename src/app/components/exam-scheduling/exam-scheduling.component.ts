import { Component } from '@angular/core';
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";

@Component({
  selector: 'app-exam-scheduling',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './exam-scheduling.component.html',
  styleUrl: './exam-scheduling.component.css',
})
export class ExamSchedulingComponent {}
