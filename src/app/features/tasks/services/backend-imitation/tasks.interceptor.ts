import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { getTasks, saveCreatedTask, saveTasksList } from '../../utils/tasksPersistemce';
import { CreateTask, Tasks } from '../../models/task';

export const tasksInterceptor: HttpInterceptorFn = (req, next) => {
  const { method, url, body } = req;

  // Имитация задержки ответа
  const simulatedDelay = 500;

  // Обработка запросов
  if (url.endsWith('/tasks') && method === 'GET') {
    return of(new HttpResponse({ status: 200, body: getTasks() })).pipe(delay(simulatedDelay));
  }

  if (url.endsWith('/tasks') && method === 'POST') {
    const newTask = body as CreateTask; // Приведение типа body
    saveCreatedTask(newTask);
    return of(new HttpResponse({ status: 201, body: newTask })).pipe(delay(simulatedDelay));
  }

  if (url.startsWith('/tasks/') && method === 'DELETE') {
    const taskId = url.split('/').pop();
    const updatedTasks = getTasks().filter(task => task.id !== taskId);
    saveTasksList(updatedTasks);
    return of(new HttpResponse({ status: 200 })).pipe(delay(simulatedDelay));
  }

  if (url.startsWith('/tasks/') && method === 'PUT') {
    const updatedTask = body as Tasks; // Приведение типа body
    const tasks = getTasks();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      saveTasksList(tasks);
    }
    return of(new HttpResponse({ status: 200, body: updatedTask })).pipe(delay(simulatedDelay));
  }

  return next(req);
};
