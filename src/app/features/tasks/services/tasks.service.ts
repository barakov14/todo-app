import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTask, Tasks } from '../models/task';
import {TasksDataService} from "./tasks-data.service";

@Injectable()
export class TasksService {
  private readonly tasksDataService = inject(TasksDataService)

  getTasks(): Observable<Tasks[]> {
    return this.tasksDataService.getTasks()
  }

  createTask(data: CreateTask): Observable<Tasks> {
    return this.tasksDataService.createTask(data)
  }

  updateTask(task: Tasks): Observable<Tasks> {
    return this.tasksDataService.updateTask(task)
  }

  deleteTask(taskId: number): Observable<void> {
    return this.tasksDataService.deleteTask(taskId)
  }
}
