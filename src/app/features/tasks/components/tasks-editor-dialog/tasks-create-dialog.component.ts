import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import { DateValidator } from '../../../../core/validators/date.validator';
import {CreateTask, TaskStatus, TaskStatusEnum } from '../../models/task';
import {DialogRef} from "@angular/cdk/dialog";
import {ButtonDirective} from "@td/shared/directives";
import {InputDirective} from "../../../../shared/directives/input/input.directive";
import {CheckboxComponent} from "../../../../shared/components/checkbox/checkbox.component";

@Component({
    selector: 'tasks-editor-dialog',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    ButtonDirective,
    InputDirective,
    CheckboxComponent
  ],
    templateUrl: './tasks-create-dialog.component.html',
    styleUrl: './tasks-create-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCreateDialogComponent {
  private readonly dialogRef = inject(DialogRef)


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

  // protected readonly tags = tags;
}
