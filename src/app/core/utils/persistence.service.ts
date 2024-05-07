import {Injectable} from "@angular/core";
import {CreateTask, Task} from "../api-types/task";

@Injectable({providedIn: 'root'})

export class PersistenceService {
  saveCreatedTask(data: CreateTask): void {
    const tasksList: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasksList.push(data)
    localStorage.setItem('tasks', JSON.stringify(tasksList))
  }

  saveTasksList(data: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(data))
  }

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) as Task[] : [];
  }


}
