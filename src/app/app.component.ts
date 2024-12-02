import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonDirective} from "./shared/directives/button/button.directive";
import {TagComponent} from "./shared/components/tag/tag.component";

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, ButtonDirective, TagComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
