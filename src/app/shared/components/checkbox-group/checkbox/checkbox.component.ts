import {ChangeDetectionStrategy, Component, forwardRef, inject, model, signal} from '@angular/core';
import {CheckboxGroupComponent} from "../checkbox-group.component";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'td-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly checkboxGroup = inject(CheckboxGroupComponent, {
    host: true,
    optional: true
  })

  value = model<string>()
  checked = signal<boolean>(false)

  onChange = (value: boolean) => {};
  onTouch = () => {};

  writeValue(value: boolean): void {
    this.checked.set(value);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  toggleValue(selectedValue: boolean): void {
    if(this.checkboxGroup) return;
    this.onChange(selectedValue);
    this.onTouch();
  }
}
