import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchInputComponent} from "./shared/components/search-input/search-input.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {DatepickerComponent} from "./shared/components";

@Component({
    selector: 'app-root',
  imports: [SearchInputComponent, ReactiveFormsModule, DatepickerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
