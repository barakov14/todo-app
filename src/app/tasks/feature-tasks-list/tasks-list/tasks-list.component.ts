import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {NgFor} from "@angular/common";
import {SearchInputComponent} from "../../../shared/ui/search-input/search-input.component";

@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [
    CdkDropList,
    NgFor,
    CdkDrag,
    SearchInputComponent
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  @Input() currentTasksPage!: string | null
  @Input() tasksList!: string[]

  @Output() taskDrop = new EventEmitter<CdkDragDrop<string[]>>()
  @Output() datePick = new EventEmitter<Date>()

  drop(event: CdkDragDrop<string[]>) {
    this.taskDrop.emit(event)
  }

  onDatePick(event: Date) {
    this.datePick.emit(event)
  }
}
