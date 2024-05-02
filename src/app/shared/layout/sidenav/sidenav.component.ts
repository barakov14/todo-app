import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonFilledComponent} from "../../ui/button-filled/button-filled.component";
import {TagComponent} from "../../ui/tag/tag.component";
import {NgForOf} from "@angular/common";
import {tags} from "../../../core/mock/tags.mock";
import {
  TasksCreateButtonComponent
} from "../../../tasks/feature-tasks-create/tasks-create-button/tasks-create-button.component";

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [
    ButtonFilledComponent,
    TagComponent,
    NgForOf,
    TasksCreateButtonComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  protected readonly tags = tags;
}
