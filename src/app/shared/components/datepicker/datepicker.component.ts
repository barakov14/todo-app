/*
import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'components-datepicker',
    imports: [
      FormsModule,
      ReactiveFormsModule
    ],
    templateUrl: './datepicker.component.html',
    styleUrl: './datepicker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent {
  @Output() dateChanged = new EventEmitter<Date>()

  public date = new FormControl()


  onDateChanged() {
    this.dateChanged.emit(this.date.value)
  }
}
*/
