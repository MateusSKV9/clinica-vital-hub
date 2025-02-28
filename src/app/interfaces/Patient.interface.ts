import { Adress } from './Adress.interface';

export interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  bloodType: string;
  phone: string;
  healthInsurance: string;
  height: number;
  weight: number;
  contant: string;

  adress: Adress;
}
