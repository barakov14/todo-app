import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DatepickerComponent} from "../../../shared/ui/datepicker/datepicker.component";
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";
import {ButtonOutlineComponent} from "../../../shared/ui/button-outline/button-outline.component";
import {InputDirective} from "../../../shared/ui/input/input.directive";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {tags} from "../../../core/mock/tags.mock";
import {CreateTask, TaskStatus, TaskStatusEnum} from "../../../core/api-types/task";
import {TextareaDirective} from "../../../shared/ui/input/textarea.directive";
import {BehaviorSubject} from "rxjs";
import {DateValidator} from "../../../core/validators/date.validator";

@Component({
  selector: 'tasks-create-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    DatepickerComponent,
    ButtonFilledComponent,
    ButtonOutlineComponent,
    InputDirective,
    ReactiveFormsModule,
    NgIf,
    MatCheckbox,
    NgForOf,
    TextareaDirective,
    AsyncPipe
  ],
  templateUrl: './tasks-create-dialog.component.html',
  styleUrl: './tasks-create-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCreateDialogComponent {
  private readonly dialogRef = inject(MatDialogRef)


  public formGroup = new FormBuilder().group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required, DateValidator]),
    isImportant: new FormControl(false),
    tags: new FormControl()
  })

  public isFavorite: boolean = false

  tagsForm: string[] = []

  public validatorsError = new BehaviorSubject<boolean>(false)


  onCreateTask() {
    if(this.formGroup.valid) {

      const status: TaskStatus[] = []
      status.push({ value: TaskStatusEnum.myTasks });

      if (this.formGroup.value.isImportant) {
        status.push({ value: TaskStatusEnum.importantTasks });
      }

      const data: CreateTask = {
        name: this.formGroup.value.name as string,
        description: this.formGroup.value.description as string,
        status: status as TaskStatus[],
        tags: this.formGroup.value.tags,
        date: this.formGroup.value.date as Date,
      }
      this.validatorsError.next(false)
      this.dialogRef.close(data)
    } else {
      this.validatorsError.next(true)
    }
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite
  }


  onPickDate(date: Date) {
    this.formGroup.controls.date.setValue(date)
    console.log(date)
  }

  onToggleTag(tag: string) {
    if(this.tagsForm.includes(tag)) {
      this.tagsForm = this.tagsForm.filter(t => t !== tag);
    } else {
      this.tagsForm.push(tag)
    }
    this.formGroup.controls.tags.setValue(this.tagsForm)
  }

  protected readonly tags = tags;
}
