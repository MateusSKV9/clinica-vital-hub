import { Adress } from './Adress.interface';

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  bloodType: string;
  phone: string;
  healthInsurance: string;
  height: number;
  weight: number;
  medicalHistory: string;

  adress: Adress;
}
