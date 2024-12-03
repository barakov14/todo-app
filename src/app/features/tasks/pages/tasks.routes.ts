import {Routes} from "@angular/router";

export const TasksRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tasks/tasks.component')
      .then(c => c.TasksComponent)
  }
]
