import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";
import {TagComponent} from "../../../shared/ui/tag/tag.component";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {tags} from "../../mock/tags.mock";
import {
  TasksCreateButtonComponent
} from "../../../tasks/feature-tasks-create/tasks-create-button/tasks-create-button.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {TasksService} from "../../../tasks/data-access/tasks.service";

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [
    ButtonFilledComponent,
    TagComponent,
    NgForOf,
    TasksCreateButtonComponent,
    RouterLink,
    NgClass,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  selectedTags: string[] = [];

  private readonly tasksService = inject(TasksService)

  public isTriggered = this.tasksService.sidenavTriggerByFilter

  private readonly router = inject(Router)

  onToggleTag(tag: string) {
    if(this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((v) => v !== tag)
    } else {
      this.selectedTags.push(tag)
    }
    this.updateQueryParams()
  }

  isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  updateQueryParams(): void {
    this.router.navigate([], { queryParams: { tag: this.selectedTags }, queryParamsHandling: 'merge' });
  }

  protected readonly tags = tags;
}
