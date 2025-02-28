import { Component } from '@angular/core';
import { AddressFormComponent } from '../../../components/shared/address-form/address-form.component';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [
    AddressFormComponent,
    ClearButtonComponent,
    RegisterButtonComponent,
  ],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css',
})
export class DoctorFormComponent {}
