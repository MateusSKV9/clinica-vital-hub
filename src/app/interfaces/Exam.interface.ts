import { Material } from './Material.interface';
import { Patient } from './Patient.interface';

export interface Exam {
  id: string;
  patient: Patient;
  exam: string;
  examType: string;
  value: number;
  description: string;
  material: Material;
}
