import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: ':systemId', loadChildren: () => import('./system').then(m => m.SYSTEM_ROUTES)
}];
