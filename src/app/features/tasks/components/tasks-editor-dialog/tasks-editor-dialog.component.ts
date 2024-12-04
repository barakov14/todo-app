import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import { DateValidator } from '../../../../core/validators/date.validator';
import {DialogRef} from "@angular/cdk/dialog";
import {ButtonDirective} from "@td/shared/directives";
import {InputDirective} from "../../../../shared/directives/input/input.directive";
import {CheckboxComponent} from "../../../../shared/components/checkbox-group/checkbox/checkbox.component";
import {CheckboxGroupComponent} from "../../../../shared/components/checkbox-group/checkbox-group.component";
import {DatepickerComponent} from "@td/shared/components";

@Component({
  selector: 'tasks-editor-dialog',
  imports: [
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
    ButtonDirective,
    InputDirective,
    CheckboxComponent,
    CheckboxGroupComponent,
    DatepickerComponent,
  ],
    templateUrl: './tasks-editor-dialog.component.html',
    styleUrl: './tasks-editor-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksEditorDialogComponent {
  private readonly dialogRef = inject(DialogRef)

  tags = ['Продуктивность', 'Образование', 'Здоровье', 'Срочно']


  public formGroup = new FormBuilder().group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required, DateValidator]),
    isImportant: new FormControl(false),
    tags: new FormArray([])
  })

  constructor() {
    this.formGroup.valueChanges.subscribe(console.log)
  }

  public isFavorite: boolean = false

  tagsForm: string[] = []

  public validatorsError = new BehaviorSubject<boolean>(false)

  get tagsFormArray(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }

  onCreateTask() {
    /*if(this.formGroup.valid) {

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
    }*/
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite
  }



  onPickDate(date: Date) {
    this.formGroup.controls.date.setValue(date)
  }

  onToggleTag(tag: string): void {
    const index = this.tagsFormArray.controls.findIndex((control) => control.value === tag);

    if (index > -1) {
      this.tagsFormArray.removeAt(index);
    } else {
      this.tagsFormArray.push(new FormControl(tag));
    }
  }
}
