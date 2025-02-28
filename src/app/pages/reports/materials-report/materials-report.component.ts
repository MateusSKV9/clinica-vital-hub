import { Component } from '@angular/core';
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";

@Component({
  selector: 'app-materials-report',
  standalone: true,
  imports: [RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './materials-report.component.html',
  styleUrl: './materials-report.component.css',
})
export class MaterialsReportComponent {}
