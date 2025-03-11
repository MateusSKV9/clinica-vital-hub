import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // ################# REGISTRATION ################# //

  {
    path: 'cadastro',
    children: [
      {
        path: 'paciente',
        loadComponent: () =>
          import(
            './pages/registration/patient-form/patient-form.component'
          ).then((m) => m.PatientFormComponent),
      },
      {
        path: 'medico',
        loadComponent: () =>
          import('./pages/registration/doctor-form/doctor-form.component').then(
            (m) => m.DoctorFormComponent
          ),
      },
      {
        path: 'material',
        loadComponent: () =>
          import(
            './pages/registration/material-form/material-form.component'
          ).then((m) => m.MaterialFormComponent),
      },
      {
        path: 'exame',
        loadComponent: () =>
          import('./pages/registration/exam-form/exam-form.component').then(
            (m) => m.ExamFormComponent
          ),
      },
      {
        path: 'consulta',
        loadComponent: () =>
          import(
            './pages/registration/appointment-form/appointment-form.component'
          ).then((m) => m.AppointmentFormComponent),
      },
    ],
  },

  // ################# SCHEDULING ################# //

  {
    path: 'agendamento',
    children: [
      {
        path: 'consulta',
        loadComponent: () =>
          import(
            './pages/scheduling/appointment-scheduling/appointment-scheduling.component'
          ).then((m) => m.AppointmentSchedulingComponent),
      },
      {
        path: 'exame',
        loadComponent: () =>
          import(
            './pages/scheduling/exam-scheduling/exam-scheduling.component'
          ).then((m) => m.ExamSchedulingComponent),
      },
      {
        path: 'visualizacao-agenda',
        loadComponent: () =>
          import(
            './pages/scheduling/schedule-view/schedule-view.component'
          ).then((m) => m.ScheduleViewComponent),
      },
      {
        path: 'pesquisa-horarios',
        loadComponent: () =>
          import(
            './pages/scheduling/schedule-search/schedule-search.component'
          ).then((m) => m.ScheduleSearchComponent),
      },
      {
        path: 'cancelamento-reagendamento',
        loadComponent: () =>
          import(
            './pages/scheduling/cancellation-rescheduling/cancellation-rescheduling.component'
          ).then((m) => m.CancellationReschedulingComponent),
      },
    ],
  },

  // ################# REPORTS ################# //

  {
    path: 'relatorio',
    children: [
      {
        path: 'consulta',
        loadComponent: () =>
          import(
            './pages/reports/consultation-report/consultation-report.component'
          ).then((m) => m.ConsultationReportComponent),
      },
      {
        path: 'exame',
        loadComponent: () =>
          import(
            './pages/reports/examination-report/examination-report.component'
          ).then((m) => m.ExaminationReportComponent),
      },
      {
        path: 'financeiro',
        loadComponent: () =>
          import(
            './pages/reports/financial-report/financial-report.component'
          ).then((m) => m.FinancialReportComponent),
      },
      {
        path: 'materiais',
        loadComponent: () =>
          import(
            './pages/reports/materials-report/materials-report.component'
          ).then((m) => m.MaterialsReportComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
