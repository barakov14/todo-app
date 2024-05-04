import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component')
        .then((c) => c.HomeComponent),
    children: [
      {
        path: ':task',
        loadComponent: () =>
          import('./tasks/feature-tasks-list/tasks-list-container/tasks-list-container.component')
            .then((c) => c.TasksListContainerComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/mytasks',
    pathMatch: 'full'
  }
];
