import {inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CompleteTask, CreateTask, Task, TaskStatusEnum} from "../../core/api-types/task";
import {PersistenceService} from "../../core/utils/persistence.service";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})

export class TasksService {
  private readonly persistenceService = inject(PersistenceService)
  private readonly router = inject(Router)

  // cтейт менеджмент через бейхейвер сабджекты

  public currentTasksPage = new BehaviorSubject<null | string>(null)
  public tasksList = new BehaviorSubject<null | Task[]>(null)
  public filteredTasksList = new BehaviorSubject<null | Task[]>(null)
  public sidenavTriggerByFilter = new BehaviorSubject<boolean>(false)

  public selectedTags = new BehaviorSubject<string[]>([])


  onToggleTag(tag: string) {
    let selectedTags = this.selectedTags.value;
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((v) => v !== tag);
    } else {
      selectedTags.push(tag);
    }
    this.router.navigate([], { queryParams: { tag: selectedTags }, queryParamsHandling: 'merge' });
    this.selectedTags.next(selectedTags);
  }



  getTasksList() {
    const tasksListFromLocalStorage = this.persistenceService.getTasks()
    this.tasksList.next(tasksListFromLocalStorage)
    this.filteredTasksList.next(tasksListFromLocalStorage)
  }

  setTasksList(data: CreateTask) {
    const tasksList: Task[] = this.tasksList.value as Task[]
    const filteredTasksList: Task[] = this.tasksList.value as Task[]

    const updatedTasksList = [data, ...tasksList]
    const updatedFilteredTasksList = [data, ...filteredTasksList]

    this.tasksList.next(updatedTasksList)
    this.filteredTasksList.next(updatedFilteredTasksList)


    this.persistenceService.saveCreatedTask(data)
  }

  filterTasks(filter: string) {
    const tasksList = this.tasksList.value
    const updatedTasksList = tasksList?.filter((v) => v.name.includes(filter))
    this.filteredTasksList.next(updatedTasksList as Task[])
    // Проверяем есть ли filter или нет
    this.sidenavTriggerByFilter.next(!!filter)
  }

  loadMoreTasks(startIndex: number, endIndex: number) {
    const additionalTasks: Task[] = this.tasksList.value?.slice(startIndex, endIndex)!
    const currentTasksList = this.tasksList.value || [];
    const updatedTasksList = currentTasksList.concat(additionalTasks);
    return updatedTasksList
  }

  deleteTask(taskName: string) {
    const tasksList: Task[] = this.tasksList.value?.map(
      (task) => {
        if (task.name === taskName) {
          task.status.push({value: TaskStatusEnum.deletedTasks});
        }
        return task
      }
    ) || []
    this.tasksList.next(tasksList as Task[])
    this.filteredTasksList.next(tasksList as Task[])
    this.persistenceService.saveTasksList(this.tasksList.value as Task[])
  }

  completeTask(complete: CompleteTask) {
    const updatedTasksList = this.tasksList.value!.map(task => {
      if (task.name === complete.taskName) {
        if (!complete.completed) {
          // Добавляем задачу в список "Мои задачи" и удаляем из "Выполненных"
          task.status = task.status.filter(v => v.value !== TaskStatusEnum.completedTasks);
          task.status.push({ value: TaskStatusEnum.myTasks });
        } else {
          // Добавляем задачу в список "Выполненные" и удаляем из "Мои задачи"
          task.status = task.status.filter(v => v.value !== TaskStatusEnum.myTasks);
          task.status.push({ value: TaskStatusEnum.completedTasks });
        }
      }
      return task;
    });

    // Обновляем значения в BehaviorSubject
    this.tasksList.next(updatedTasksList);
    this.filteredTasksList.next(updatedTasksList);

    // Сохраняем обновленный список задач
    this.persistenceService.saveTasksList(updatedTasksList);
  }


  returnTask(taskName: string) {
    const tasksList = this.tasksList.value?.map(
      (task) => {
        if (task.name === taskName) {
          task.status = task.status.filter(
            (status) => status.value !== TaskStatusEnum.deletedTasks
          )
        }
        return task
      }
    )
    this.tasksList.next(tasksList as Task[])
    this.filteredTasksList.next(tasksList as Task[])
    this.persistenceService.saveTasksList(this.tasksList.value as Task[])
  }
}
