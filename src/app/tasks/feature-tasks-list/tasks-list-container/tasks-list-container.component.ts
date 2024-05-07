import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TasksListComponent} from "../tasks-list/tasks-list.component";
import {ActivatedRoute, Params} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {StringService} from "../../../core/utils/string.service";
import {TasksService} from "../../data-access/tasks.service";
import {AsyncPipe} from "@angular/common";
import {CompleteTask} from "../../../core/api-types/task";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'tasks-list-container',
  standalone: true,
  imports: [
    TasksListComponent,
    AsyncPipe
  ],
  templateUrl: './tasks-list-container.component.html',
  styleUrl: './tasks-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListContainerComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  private readonly tasksService = inject(TasksService)
  private readonly destroyRef = inject(DestroyRef)
  private readonly stringService = inject(StringService)

  public currentTasksPage = this.tasksService.currentTasksPage

  public tasksList = this.tasksService.filteredTasksList

  public selectedTags = new BehaviorSubject<string[]>([])

  constructor() {
    this.route.params.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((params: Params) => {
      const page = params['task']
      this.currentTasksPage.next(this.stringService.capitalizeFirstLetter(page))
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
  }

  protected readonly event = event;
}
