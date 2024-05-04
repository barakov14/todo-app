import {ChangeDetectionStrategy, Component, EventEmitter, Output, output} from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ui-datepicker',
  standalone: true,
  imports: [
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  @Output() dateChanged = new EventEmitter<Date>()

  public date = new FormControl()


  onDateChanged() {
    this.dateChanged.emit(this.date.value)
  }
}
