
import {ChangeDetectionStrategy, Component, forwardRef, signal} from '@angular/core';

import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'td-datepicker',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
    templateUrl: './datepicker.component.html',
    styleUrl: './datepicker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatepickerComponent),
        multi: true,
      },
    ],
})
export class DatepickerComponent implements ControlValueAccessor {
  value = signal<string>('')

  onChange = (value: string) => {}
  onTouched = () => {}

  writeValue(value: string): void {
    this.value.set(value)
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value.set(input.value)
    this.onChange(this.value())
    this.onTouched()
  }
}

