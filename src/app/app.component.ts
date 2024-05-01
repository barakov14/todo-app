import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonFilledComponent} from "./shared/ui/button-filled/button-filled.component";
import {ButtonOutlineComponent} from "./shared/ui/button-outline/button-outline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonFilledComponent, ButtonOutlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
