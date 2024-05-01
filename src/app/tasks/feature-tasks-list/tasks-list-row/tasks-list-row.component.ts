import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tasks-list-row',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list-row.component.html',
  styleUrl: './tasks-list-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListRowComponent {

}
