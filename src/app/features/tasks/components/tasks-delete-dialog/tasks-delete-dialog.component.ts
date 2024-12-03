import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {ButtonDirective} from "@td/shared/directives";

@Component({
    selector: 'td-tasks-delete-dialog',
  imports: [
    ButtonDirective
  ],
    templateUrl: './tasks-delete-dialog.component.html',
    styleUrl: './tasks-delete-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDeleteDialogComponent {

  private readonly dialogRef = inject(DialogRef)

  onDelete() {
    this.dialogRef.close(true)
  }

  onClose() {
    this.dialogRef.close()
  }
}
