import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tasks-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './tasks-delete-button.component.html',
  styleUrl: './tasks-delete-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDeleteButtonComponent {

}
