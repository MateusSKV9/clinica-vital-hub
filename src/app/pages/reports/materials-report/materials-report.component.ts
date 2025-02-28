import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-materials-report',
  standalone: true,
  imports: [RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './materials-report.component.html',
  styleUrl: './materials-report.component.css',
})
export class MaterialsReportComponent {}
