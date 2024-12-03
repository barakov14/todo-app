import {AbstractControl} from '@angular/forms'

// Валидатор для проверки формата даты (YYYY-MM-DD)
export function DateValidator(
  control: AbstractControl,
): {[key: string]: any} | null {
  if (control.value instanceof Date) {
    return null
  } else {
    return {invalidDateType: {value: control.value}}
  }
}
