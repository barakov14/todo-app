import {ChangeDetectionStrategy, Component, EventEmitter, Output, output} from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ui-datepicker',
  standalone: true,
  imports: [
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  @Output() dateChanged = new EventEmitter<Date>()

  public date!: Date


  onDateChanged() {
    this.dateChanged.emit(this.date)
  }
}
