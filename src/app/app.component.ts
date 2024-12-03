import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {CheckboxComponent} from "./shared/components/checkbox-group/checkbox/checkbox.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [ReactiveFormsModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
  form = new FormBuilder()
}
