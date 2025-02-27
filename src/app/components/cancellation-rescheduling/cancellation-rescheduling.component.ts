import { Component } from '@angular/core';
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";

@Component({
  selector: 'app-cancellation-rescheduling',
  standalone: true,
  imports: [ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './cancellation-rescheduling.component.html',
  styleUrl: './cancellation-rescheduling.component.css',
})
export class CancellationReschedulingComponent {}
