import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateTask, Tasks} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  private readonly http = inject(HttpClient);

  private apiUrl = '/tasks'


  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl);
  }

  createTask(data: CreateTask): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUrl, data);
  }

  updateTask(task: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }
}
