import { Routes } from '@angular/router';
import { Systems } from './systems/systems';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Systems },
  {
    path: ':systemId',
    loadChildren: () => import('./system').then((m) => m.SYSTEM_ROUTES),
  },
];
