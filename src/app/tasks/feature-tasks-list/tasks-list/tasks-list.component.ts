import {
  ChangeDetectionStrategy,
  Component, DestroyRef, EventEmitter, inject,
  Input, Output,
} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {AsyncPipe, DatePipe, NgClass, NgFor, NgIf, SlicePipe} from "@angular/common";
import {SearchInputComponent} from "../../../shared/ui/search-input/search-input.component";
import {CompleteTask, Task, TaskStatusEnum} from "../../../core/api-types/task";
import {MatCheckbox} from "@angular/material/checkbox";
import {TagComponent} from "../../../shared/ui/tag/tag.component";
import {BadgeComponent} from "../../../shared/ui/badge/badge.component";
import {TasksDeleteButtonComponent} from "../../feature-tasks-delete/tasks-delete-button/tasks-delete-button.component";
import {MatDivider} from "@angular/material/divider";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HighlightDirective} from "../../../core/directives/highlight.directive";
import {PersistenceService} from "../../../core/utils/persistence.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {TasksService} from "../../data-access/tasks.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [
    CdkDropList,
    NgFor,
    CdkDrag,
    SearchInputComponent,
    MatCheckbox,
    TagComponent,
    BadgeComponent,
    DatePipe,
    TasksDeleteButtonComponent,
    MatDivider,
    NgClass,
    CdkDragHandle,
    NgIf,
    AsyncPipe,
    HighlightDirective,
    ReactiveFormsModule,
    SlicePipe
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  @Input() currentTasksPage!: string | null
  @Input() tasksList!: Task[] | null
  @Input() selectedTags!: string[] | null | undefined
  @Output() filter = new EventEmitter<string>()
  @Output() completeTasks = new EventEmitter<CompleteTask>()
  @Output() returnTask = new EventEmitter<string>()

  public currentPage = 0;
  public itemsPerPage = 5;


  private readonly persistenceService = inject(PersistenceService)
  private readonly tasksService = inject(TasksService)
  private readonly destroyRef = inject(DestroyRef)


  public filterChanges = new BehaviorSubject<string>('')

  complete = new FormControl()


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasksList as Task[], event.previousIndex, event.currentIndex);
    const tasksList = this.tasksService.tasksList.value
    if(tasksList === this.tasksList) {
      this.persistenceService.saveTasksList(this.tasksList!)
    }
  }

  areAnyTagsSelected(): Task[] {
    if (this.selectedTags!.length > 0) {
      return this.loadMoreTasks().filter((task) => {
        return task && task.tags && task.tags.some((tag) => this.selectedTags?.includes(tag));
      });
    }
    return this.tasksList!;
  }

  onSearch(filter: string) {
    this.filterChanges.next(filter);
    this.filter.emit(filter);

    if (filter) {
      this.currentTasksPage = 'Результаты поиска';
    }
  }

  isImportant(task: Task): boolean {
    return task && task.status && task.status.some((v) => v.value === TaskStatusEnum.importantTasks);
  }

  onToggleTag(tag: string) {
    this.tasksService.onToggleTag(tag)
  }

  taskIncluded(task: Task, currentTaskPage: string): Observable<boolean> {
    return this.filterChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      map((filter) => {
        if (filter) {
          this.currentTasksPage = TaskStatusEnum.myTasks
          return true; // Если фильтр не пустой, вернуть true
        } else {
          return task.status.some((v) => v.value === currentTaskPage); // Иначе вернуть результат сравнения
        }
      })
    );
  }



  onComplete(taskName: string) {
    const data: CompleteTask = {
      completed: this.complete.value,
      taskName
    }
    this.completeTasks.emit(data)
  }

  onReturnTask(taskName: string) {
    this.returnTask.emit(taskName)
  }

  showNotDeletedTasks(currentTasksPage: string, task: Task): boolean {
    if (currentTasksPage === TaskStatusEnum.deletedTasks) {
      return task! && task.status && task.status.some((status) => status.value === TaskStatusEnum.deletedTasks);
    } else {
      return !task || !task.status || !task.status.some((status) => status.value === TaskStatusEnum.deletedTasks);
    }
  }

  notInImportantPage(currentTaskPage: string): boolean {
    return currentTaskPage !== TaskStatusEnum.importantTasks;
  }

  notInDeletedPage(currentTaskPage: string): boolean {
    return currentTaskPage !== TaskStatusEnum.deletedTasks;
  }

  loadMoreTasks() {
    this.currentPage++;

    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.tasksService.loadMoreTasks(startIndex, endIndex);
  }

  get isLast(): boolean {
    return this.loadMoreTasks()?.length === this.tasksService.tasksList.value?.length
  }


  protected readonly TaskStatusEnum = TaskStatusEnum;
}
