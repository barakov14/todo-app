import {ChangeDetectionStrategy, Component, DestroyRef, inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TasksService} from "../../data-access/tasks.service";
import {TasksCreateDialogComponent} from "../../feature-tasks-create/tasks-create-dialog/tasks-create-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CreateTask, Task} from "../../../core/api-types/task";
import {TasksDeleteDialogComponent} from "../tasks-delete-dialog/tasks-delete-dialog.component";

@Component({
  selector: 'tasks-delete-button',
  standalone: true,
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
