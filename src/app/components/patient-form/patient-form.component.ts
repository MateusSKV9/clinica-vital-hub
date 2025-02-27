import { Component } from '@angular/core';
import { AddressFormComponent } from "../shared/address-form/address-form.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [AddressFormComponent, RegisterButtonComponent, ClearButtonComponent],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent {}
