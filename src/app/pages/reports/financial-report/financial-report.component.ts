import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-financial-report',
  standalone: true,
  imports: [RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './financial-report.component.html',
  styleUrl: './financial-report.component.css',
})
export class FinancialReportComponent {}
