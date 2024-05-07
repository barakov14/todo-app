import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";
import {TagComponent} from "../../../shared/ui/tag/tag.component";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {tags} from "../../mock/tags.mock";
import {
  TasksCreateButtonComponent
} from "../../../tasks/feature-tasks-create/tasks-create-button/tasks-create-button.component";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {TasksService} from "../../../tasks/data-access/tasks.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map, Observable, tap} from "rxjs";

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

  private readonly tasksService = inject(TasksService)
  public isTriggered = this.tasksService.sidenavTriggerByFilter
  private readonly destroyRef = inject(DestroyRef)

  onToggleTag(tag: string) {
    this.tasksService.onToggleTag(tag)
  }

  isSelected(tag: string): Observable<boolean> {
    return this.tasksService.selectedTags.pipe(
      takeUntilDestroyed(this.destroyRef),
      map((res) => {
        return res.includes(tag)
      })
    )
  }

  protected readonly tags = tags;
}
