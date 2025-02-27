import { Component } from '@angular/core';
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";

@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './appointment-scheduling.component.html',
  styleUrl: './appointment-scheduling.component.css',
})
export class AppointmentSchedulingComponent {}
