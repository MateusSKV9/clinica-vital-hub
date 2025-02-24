import { Component } from '@angular/core';
import { AddressFormComponent } from "../shared/address-form/address-form.component";

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [AddressFormComponent],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent {}
