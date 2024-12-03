import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {BehaviorSubject} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {capitalizeFirstLetter} from "../../../../core/utils/capitalizeFirstLetter";
import {CompleteTask} from "../../models/task";
import {AsyncPipe} from "@angular/common";
import {TasksListComponent} from "../../components/tasks-list/tasks-list.component";
import {TasksSidenavComponent} from "../../components/tasks-sidenav/tasks-sidenav.component";
import {TasksDataService} from "../../services/tasks-data.service";

@Component({
  selector: 'td-tasks',
  imports: [
    AsyncPipe,
    TasksListComponent,
    TasksSidenavComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TasksDataService, TasksService]
})
export class TasksComponent {
  private readonly route = inject(ActivatedRoute)
  private readonly tasksService = inject(TasksService)
  private readonly destroyRef = inject(DestroyRef)

  public selectedTags = new BehaviorSubject<string[]>([])

  /*constructor() {
    this.route.params.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((params: Params) => {
      const page = params['task']
      this.currentTasksPage.next(capitalizeFirstLetter(page))
    })

    this.route.queryParams.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((queryParams) => {
      this.selectedTags.next(queryParams['tag'] ? Array.isArray(queryParams['tag']) ? queryParams['tag'] : [queryParams['tag']] : [])
    })
  }

  ngOnInit() {
    this.tasksService.getTasksList()
  }

  filter(filter: string) {
    this.tasksService.filterTasks(filter)
  }


  onComplete(complete: CompleteTask) {
    this.tasksService.completeTask(complete)
  }

  onReturnTask(taskName: string) {
    this.tasksService.returnTask(taskName)
  }*/
}
