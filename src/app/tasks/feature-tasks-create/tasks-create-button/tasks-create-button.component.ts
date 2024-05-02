import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";

@Component({
  selector: 'tasks-create-button',
  standalone: true,
    imports: [
        ButtonFilledComponent
    ],
  templateUrl: './tasks-create-button.component.html',
  styleUrl: './tasks-create-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCreateButtonComponent {

}
