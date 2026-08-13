import { Routes } from '@angular/router';
import { ContractComponent } from './contract/contract';
import { System } from './system';

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: System,
  },
  {
    path: 'contracts/:contractId',
    component: ContractComponent,
  },
];
