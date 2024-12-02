import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatepickerComponent} from "./shared/ui/datepicker/datepicker.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, DatepickerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
