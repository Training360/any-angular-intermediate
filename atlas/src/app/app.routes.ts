import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'plans',
    loadComponent: () =>
      import('./page/plans/plans.component').then((mod) => mod.PlansComponent),
  },
  {
    path: 'cases',
    loadComponent: () =>
      import('./page/cases/cases.component').then((mod) => mod.CasesComponent),
  },
  {
    path: 'steps',
    loadComponent: () =>
      import('./page/steps/steps.component').then((mod) => mod.StepsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
