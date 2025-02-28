import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-examination-report',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './examination-report.component.html',
  styleUrl: './examination-report.component.css',
})
export class ExaminationReportComponent {}
