import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tasks-list-container',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list-container.component.html',
  styleUrl: './tasks-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListContainerComponent {

}
