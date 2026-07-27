import { Routes } from '@angular/router';
import { ContractComponent } from './contract/contract';

export const SYSTEM_ROUTES: Routes = [
  {
    path: 'contracts/:contractId',
    component: ContractComponent,
  },
];
