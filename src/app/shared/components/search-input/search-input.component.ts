import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  signal
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'td-search-input',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './search-input.component.html',
    styleUrl: './search-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchInputComponent),
        multi: true,
      },
    ],
})
export class SearchInputComponent implements ControlValueAccessor {
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
