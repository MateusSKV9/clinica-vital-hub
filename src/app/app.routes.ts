import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentFormComponent } from './pages/registration/appointment-form/appointment-form.component';
import { DoctorFormComponent } from './pages/registration/doctor-form/doctor-form.component';
import { ExamFormComponent } from './pages/registration/exam-form/exam-form.component';
import { MaterialFormComponent } from './pages/registration/material-form/material-form.component';
import { PatientFormComponent } from './pages/registration/patient-form/patient-form.component';
import { ConsultationReportComponent } from './pages/reports/consultation-report/consultation-report.component';
import { ExaminationReportComponent } from './pages/reports/examination-report/examination-report.component';
import { FinancialReportComponent } from './pages/reports/financial-report/financial-report.component';
import { MaterialsReportComponent } from './pages/reports/materials-report/materials-report.component';
import { AppointmentSchedulingComponent } from './pages/scheduling/appointment-scheduling/appointment-scheduling.component';
import { CancellationReschedulingComponent } from './pages/scheduling/cancellation-rescheduling/cancellation-rescheduling.component';
import { ExamSchedulingComponent } from './pages/scheduling/exam-scheduling/exam-scheduling.component';
import { ScheduleSearchComponent } from './pages/scheduling/schedule-search/schedule-search.component';
import { ScheduleViewComponent } from './pages/scheduling/schedule-view/schedule-view.component';

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
      { path: 'visualizacao-agenda', component: ScheduleViewComponent },
      { path: 'pesquisa-horarios', component: ScheduleSearchComponent },
      {
        path: 'cancelamento-reagendamento',
        component: CancellationReschedulingComponent,
      },
    ],
  },
  {
    path: 'relatorio',
    children: [
      { path: 'consulta', component: ConsultationReportComponent },
      { path: 'exame', component: ExaminationReportComponent },
      { path: 'financeiro', component: FinancialReportComponent },
      { path: 'materiais', component: MaterialsReportComponent },
    ],
  },
];
