import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { ExamSchedulingComponent } from './components/exam-scheduling/exam-scheduling.component';
import { ScheduleViewComponent } from './components/schedule-view/schedule-view.component';
import { ScheduleSearchComponent } from './components/schedule-search/schedule-search.component';
import { CancellationReschedulingComponent } from './components/cancellation-rescheduling/cancellation-rescheduling.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cadastro',
    children: [
      { path: 'paciente', component: PatientFormComponent },
      { path: 'medico', component: DoctorFormComponent },
      { path: 'material', component: MaterialFormComponent },
      { path: 'exame', component: ExamFormComponent },
      { path: 'consulta', component: AppointmentFormComponent },
    ],
  },
  {
    path: 'agendamento',
    children: [
      { path: 'consulta', component: AppointmentSchedulingComponent },
      { path: 'exame', component: ExamSchedulingComponent },
      { path: 'visualizacao_agenda', component: ScheduleViewComponent },
      { path: 'pesquisa_horarios', component: ScheduleSearchComponent },
      { path: 'cancelamento_reagendamento', component: CancellationReschedulingComponent },
    ],
  },
];
