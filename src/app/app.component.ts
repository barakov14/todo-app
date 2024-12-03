import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CheckboxComponent} from "./shared/components/checkbox/checkbox.component";

@Component({
    selector: 'app-root',
    imports: [ReactiveFormsModule, CheckboxComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
