import {ChangeDetectionStrategy, Component, DestroyRef, inject, output} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map, Observable} from "rxjs";
import {TasksService} from "../../services/tasks.service";
import {ButtonDirective} from "@td/shared/directives";
import {Dialog} from "@angular/cdk/dialog";
import {
  TasksCreateDialogComponent
} from "../tasks-editor-dialog/tasks-create-dialog.component";

@Component({
  selector: 'td-tasks-sidenav',
  imports: [
    NgForOf,
    RouterLink,
    NgClass,
    RouterLinkActive,
    AsyncPipe,
    ButtonDirective
  ],
  templateUrl: './tasks-sidenav.component.html',
  styleUrl: './tasks-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksSidenavComponent {

  private readonly tasksService = inject(TasksService)
  // public isTriggered = this.tasksService.sidenavTriggerByFilter

  private readonly destroyRef = inject(DestroyRef)
  private readonly dialog = inject(Dialog)


  createTask = output<void>()

  /*onToggleTag(tag: string) {
    this.tasksService.onToggleTag(tag)
  }

  isSelected(tag: string): Observable<boolean> {
    return this.tasksService.selectedTags.pipe(
      takeUntilDestroyed(this.destroyRef),
      map((res) => {
        return res.includes(tag)
      })
    )
  }*/


  onCreateTask() {
    this.createTask.emit()
  }
}
