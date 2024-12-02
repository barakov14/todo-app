import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layouts/user-authorized-layout/user-authorized-layout.component')
      .then(c => c.UserAuthorizedLayoutComponent)
  }
];
