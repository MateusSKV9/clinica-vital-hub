import { Component } from '@angular/core';
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";

@Component({
  selector: 'app-financial-report',
  standalone: true,
  imports: [RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './financial-report.component.html',
  styleUrl: './financial-report.component.css',
})
export class FinancialReportComponent {}
