import {inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CreateTask, Task} from "../../core/api-types/task";
import {PersistenceService} from "../../core/utils/persistence.service";

@Injectable({providedIn: 'root'})

export class TasksService {
  private readonly persistenceService = inject(PersistenceService)
  public currentTasksPage = new BehaviorSubject<null | string>(null)
  public tasksList = new BehaviorSubject<null | Task[]>(null)
  public filteredTasksList = new BehaviorSubject<null | Task[]>(null)


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


    this.persistenceService.saveTask(data)
  }

  filterTasks(filter: string) {
    const tasksList = this.tasksList.value
    const updatedTasksList = tasksList?.filter((v) => v.name.includes(filter))
    this.filteredTasksList.next(updatedTasksList as Task[])
  }

  deleteTask(taskName: string) {
    const tasksList = this.tasksList.value?.filter(
      (v) => !v.name.includes(taskName)
    )
    this.tasksList.next(tasksList as Task[])
    this.filteredTasksList.next(tasksList as Task[])
  }
}
