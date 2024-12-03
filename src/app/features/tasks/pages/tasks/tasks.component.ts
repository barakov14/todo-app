import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {BehaviorSubject} from "rxjs";
import {TasksDataService} from "../../services/tasks-data.service";
import {TasksSidenavComponent} from "@td/features/tasks/components";

@Component({
  selector: 'td-tasks',
  imports: [
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
