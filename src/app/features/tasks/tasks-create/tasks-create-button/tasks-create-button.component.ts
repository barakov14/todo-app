import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ButtonFilledComponent} from "../../../../shared/ui/button-filled/button-filled.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TasksCreateDialogComponent} from "../tasks-create-dialog/tasks-create-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CreateTask} from "../../../../core/api-types/task";
import {TasksService} from "../../services/tasks.service";

@Component({
    selector: 'tasks-create-button',
    imports: [
        ButtonFilledComponent
    ],
    templateUrl: './tasks-create-button.component.html',
    styleUrl: './tasks-create-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCreateButtonComponent {
  private readonly dialog = inject(MatDialog)
  private readonly destroyRef = inject(DestroyRef)
  private readonly tasksService = inject(TasksService)


  openTasksCreateDialog() {
    const dialogRef: MatDialogRef<TasksCreateDialogComponent> =
      this.dialog.open(TasksCreateDialogComponent, {
        hasBackdrop: true,
        panelClass: 'dialog-no-shadow'
      })
    dialogRef.afterClosed()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(
        (data: CreateTask) => {
          if(data) {
            this.tasksService.setTasksList(data)
          }
        }
      )
  }
}
