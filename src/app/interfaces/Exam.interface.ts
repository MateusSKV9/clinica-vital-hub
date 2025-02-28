import { Material } from './Material.interface';
import { Patient } from './patient.interface';

export interface Exam {
  id: number;
  patient: Patient;
  exam: string;
  examType: string;
  value: number;
  description: string;
  material: Material;
}
