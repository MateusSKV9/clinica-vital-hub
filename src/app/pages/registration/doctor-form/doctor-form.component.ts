import { Component } from '@angular/core';
import { AddressFormComponent } from "../shared/address-form/address-form.component";
import { ClearButtonComponent } from "../shared/clear-button/clear-button.component";
import { RegisterButtonComponent } from "../shared/register-button/register-button.component";

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [AddressFormComponent, ClearButtonComponent, RegisterButtonComponent],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css',
})
export class DoctorFormComponent {}
