import {
  ChangeDetectionStrategy,
  Component, EventEmitter, inject,
  Input, Output,
} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {AsyncPipe, DatePipe, NgClass, NgFor, NgIf} from "@angular/common";
import {SearchInputComponent} from "../../../shared/ui/search-input/search-input.component";
import {Task} from "../../../core/api-types/task";
import {MatCheckbox} from "@angular/material/checkbox";
import {TagComponent} from "../../../shared/ui/tag/tag.component";
import {BadgeComponent} from "../../../shared/ui/badge/badge.component";
import {TasksDeleteButtonComponent} from "../../feature-tasks-delete/tasks-delete-button/tasks-delete-button.component";
import {MatDivider} from "@angular/material/divider";
import {BehaviorSubject, Observable} from "rxjs";
import {HighlightDirective} from "../../../core/directives/highlight.directive";
import {PersistenceService} from "../../../core/utils/persistence.service";

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
    HighlightDirective
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

  private readonly persistenceService = inject(PersistenceService)

  public filterChanges = new BehaviorSubject<string>('')

  private currentTasksPageCopy = ''

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasksList as Task[], event.previousIndex, event.currentIndex);
  }

  areAnyTagsSelected(): Task[] {
    if (this.selectedTags!.length > 0) {
      return this.tasksList!.filter((task) => {
        return task.tags.some((tag) => this.selectedTags?.includes(tag));
      });
    }
    return this.tasksList!;
  }

  onSearch(filter: string) {
    this.filter.emit(filter);
    this.filterChanges.next(filter);

    this.currentTasksPageCopy = this.currentTasksPage as string;

    if (filter) {
      this.currentTasksPage = 'Результаты поиска';
    }
  }
}
