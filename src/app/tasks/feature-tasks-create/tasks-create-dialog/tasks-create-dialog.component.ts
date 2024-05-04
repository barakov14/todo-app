import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogClose, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {DatepickerComponent} from "../../../shared/ui/datepicker/datepicker.component";
import {InputComponent} from "../../../shared/ui/input/input.component";
import {ButtonFilledComponent} from "../../../shared/ui/button-filled/button-filled.component";
import {ButtonOutlineComponent} from "../../../shared/ui/button-outline/button-outline.component";
import {InputDirective} from "../../../shared/ui/input/input.directive";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {DateValidator} from "../../../core/validators/date.validator";
import {NgForOf, NgIf} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {tags} from "../../../core/mock/tags.mock";

@Component({
  selector: 'tasks-create-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    DatepickerComponent,
    InputComponent,
    ButtonFilledComponent,
    ButtonOutlineComponent,
    InputDirective,
    ReactiveFormsModule,
    NgIf,
    MatCheckbox,
    NgForOf
  ],
  templateUrl: './tasks-create-dialog.component.html',
  styleUrl: './tasks-create-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCreateDialogComponent {
  public formGroup = new FormBuilder().group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    isImportant: new FormControl(false, [Validators.required]),
    isFavorite: new FormControl(false, [Validators.required]),
    tags: new FormControl()
  })

  public isFavorite: boolean = false

  tagsForm: string[] = []


  onCreate() {
    console.log(this.formGroup.getRawValue())
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite
    this.formGroup.controls.isFavorite.setValue(this.isFavorite)
    console.log(this.formGroup.value.isFavorite)
  }


  onPickDate(date: Date) {
    this.formGroup.controls.date.setValue(date.toString())
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
