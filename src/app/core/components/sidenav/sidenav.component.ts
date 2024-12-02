import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {tags} from "../../mock/tags.mock";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map, Observable} from "rxjs";
import {TasksService} from "../../../features/tasks/services/tasks.service";

@Component({
  selector: 'sidenav',
  imports: [
    NgForOf,
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
