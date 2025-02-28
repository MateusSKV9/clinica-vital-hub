import { Component } from '@angular/core';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [
    ClearButtonComponent,
    RegisterButtonComponent,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css',
})
export class ScheduleViewComponent {}
