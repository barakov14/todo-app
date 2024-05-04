import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {TasksListComponent} from "../tasks-list/tasks-list.component";
import {ActivatedRoute, Params} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {StringService} from "../../../core/utils/string.service";
import {TasksService} from "../../data-access/tasks.service";
import {AsyncPipe} from "@angular/common";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

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
export class TasksListContainerComponent {
  private readonly route = inject(ActivatedRoute)
  private readonly tasksService = inject(TasksService)
  private readonly destroyRef = inject(DestroyRef)
  private readonly stringService = inject(StringService)

  public currentTasksPage = this.tasksService.currentTasksPage

  constructor() {
    this.route.params.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((params: Params) => {
      const page = params['task']
      this.currentTasksPage.next(this.stringService.capitalizeFirstLetter(page))
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  onDatePick(date: Date) {

  }
}
