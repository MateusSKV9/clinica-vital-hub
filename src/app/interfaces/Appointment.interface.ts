import { Doctor } from './Doctor.interface';
import { Material } from './Material.interface';
import { Patient } from './Patient.interface';

export interface Appointment {
  id: string;
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
