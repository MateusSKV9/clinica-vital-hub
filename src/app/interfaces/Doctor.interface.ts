import { Adress } from './Adress.interface';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  crm: string;
  valueAppointment: number;
  consultationHours: string;
  contant: string;

  adress: Adress;

  // dateOfBirth: string;
  // bloodType: string;
  // phone: string;
  // healthInsurance: string;
  // height: number;
  // weight: number;
}
