import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonFilledComponent} from "./shared/ui/button-filled/button-filled.component";
import {ButtonOutlineComponent} from "./shared/ui/button-outline/button-outline.component";
import {DatepickerComponent} from "./shared/ui/datepicker/datepicker.component";
import {InputComponent} from "./shared/ui/input/input.component";
import {BadgeComponent} from "./shared/ui/badge/badge.component";
import {TagComponent} from "./shared/ui/tag/tag.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonFilledComponent, ButtonOutlineComponent, DatepickerComponent, InputComponent, BadgeComponent, TagComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todo-app';
}
