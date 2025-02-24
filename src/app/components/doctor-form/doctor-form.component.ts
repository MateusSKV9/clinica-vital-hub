import { Component } from '@angular/core';
import { AddressFormComponent } from "../shared/address-form/address-form.component";

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [AddressFormComponent],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css',
})
export class DoctorFormComponent {}
