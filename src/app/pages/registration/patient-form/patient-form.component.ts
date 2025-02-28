import { Component } from '@angular/core';
import { AddressFormComponent } from '../../../components/shared/address-form/address-form.component';
import { ClearButtonComponent } from '../../../components/shared/clear-button/clear-button.component';
import { RegisterButtonComponent } from '../../../components/shared/register-button/register-button.component';


@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [AddressFormComponent, RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent {}
