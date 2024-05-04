import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TasksCreateDialogComponent} from "../tasks-create-dialog/tasks-create-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'tasks-create-button',
  standalone: true,
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
      .subscribe()
  }
}
