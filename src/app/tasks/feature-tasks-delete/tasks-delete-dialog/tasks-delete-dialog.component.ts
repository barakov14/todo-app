import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tasks-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './tasks-delete-dialog.component.html',
  styleUrl: './tasks-delete-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDeleteDialogComponent {

}
