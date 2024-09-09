import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import { ButtonFilledComponent } from '../../../../shared/ui/button-filled/button-filled.component';
import { ButtonOutlineComponent } from '../../../../shared/ui/button-outline/button-outline.component';

@Component({
  selector: 'tasks-delete-dialog',
  standalone: true,
  imports: [
    ButtonFilledComponent,
    ButtonOutlineComponent,
    MatDialogClose
  ],
  templateUrl: './tasks-delete-dialog.component.html',
  styleUrl: './tasks-delete-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDeleteDialogComponent {

  private readonly dialogRef = inject(MatDialogRef)

  onDelete() {
    this.dialogRef.close(true)
  }
}
