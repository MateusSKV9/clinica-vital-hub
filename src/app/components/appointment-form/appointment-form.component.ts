import { Component } from '@angular/core';
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent {}
