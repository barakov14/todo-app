import {inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CompleteTask, CreateTask, Task, TaskStatusEnum} from "../../core/api-types/task";
import {PersistenceService} from "../../core/utils/persistence.service";

@Injectable({providedIn: 'root'})

export class TasksService {
  private readonly persistenceService = inject(PersistenceService)
  public currentTasksPage = new BehaviorSubject<null | string>(null)
  public tasksList = new BehaviorSubject<null | Task[]>(null)
  public filteredTasksList = new BehaviorSubject<null | Task[]>(null)
  public sidenavTriggerByFilter = new BehaviorSubject<boolean>(false)


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
    this.sidenavTriggerByFilter.next(!!filter)
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
    const tasksList: Task[] = this.tasksList.value?.map(
      (task) => {
        if (task.name === complete.taskName) {
          if (!complete.completed) {
            task.status.push({value: TaskStatusEnum.myTasks});
            task.status = task.status.filter(v => v.value !== TaskStatusEnum.completedTasks);
          } else {
            task.status.push({value: TaskStatusEnum.completedTasks});
            task.status = task.status.filter(v => v.value !== TaskStatusEnum.myTasks);
          }
        }
        return task
      }
    ) || []
    this.tasksList.next(tasksList as Task[])
    this.filteredTasksList.next(tasksList as Task[])
    this.persistenceService.saveTasksList(this.tasksList.value as Task[])
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
