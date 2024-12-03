import {CreateTask, Task} from "../models/task";

export function saveCreatedTask(data: CreateTask): void {
  const tasksList: Task[] = getTasks();
  tasksList.push(data);
  saveTasksList(tasksList);
}

export function saveTasksList(data: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(data));
}

export function getTasks(): Task[] {
  const tasksJson = localStorage.getItem('tasks');
  return tasksJson ? JSON.parse(tasksJson) as Task[] : [];
}
