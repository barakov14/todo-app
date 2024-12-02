import {ChangeDetectionStrategy, Component, DestroyRef, inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TasksService} from "../../services/tasks.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TasksDeleteDialogComponent} from "../tasks-delete-dialog/tasks-delete-dialog.component";

@Component({
    selector: 'tasks-delete-button',
    imports: [],
    templateUrl: './tasks-delete-button.component.html',
    styleUrl: './tasks-delete-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDeleteButtonComponent {
  private readonly dialog = inject(MatDialog)
  private readonly destroyRef = inject(DestroyRef)
  private readonly tasksService = inject(TasksService)

  @Input({required: true}) taskName!: string


  openTasksDeleteDialog() {
    const dialogRef: MatDialogRef<TasksDeleteDialogComponent> =
      this.dialog.open(TasksDeleteDialogComponent, {
        hasBackdrop: true,
        panelClass: 'dialog-no-shadow'
      })
    dialogRef.afterClosed()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(
        (data: boolean) => {
          if(data) {
            this.tasksService.deleteTask(this.taskName)
          }
        }
      )
  }
}
