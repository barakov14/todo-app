import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {

}
