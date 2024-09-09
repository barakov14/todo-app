import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'my',
    loadComponent: () =>
      import('./core/containers/home/home.component')
        .then((c) => c.HomeComponent),
    children: [
      {
        path: ':task',
        loadComponent: () =>
          import('./modules/tasks/tasks-list/tasks-list-container/tasks-list-container.component')
            .then((c) => c.TasksListContainerComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/my/мои%20задачи',
    pathMatch: 'full'
  }
];
