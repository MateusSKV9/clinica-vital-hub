import { Doctor } from './Doctor.interface';
import { Material } from './Material.interface';
import { Patient } from './patient.interface';

export interface Appointment {
  id: number;
  doctor: Doctor;
  patient: Patient;
  appointmentType: string;
  complaint: string;
  healthInsurance: string;
  date: string;
  hour: string;
  material: Material;
  observations: string;
}
