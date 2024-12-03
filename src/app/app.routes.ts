import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layouts/user-authorized-layout/user-authorized-layout.component')
      .then(c => c.UserAuthorizedLayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/tasks/pages/tasks.routes')
          .then(r => r.TasksRoutes)
      }
    ]
  }
];
