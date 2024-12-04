import {Directive, inject, input} from '@angular/core';
import {AbstractControl, ControlContainer, NgControl} from "@angular/forms";

@Directive({
  selector: '[tdControl]',
  exportAs: 'tdControl',
})
export class ControlDirective {
  private readonly ngControl = inject(NgControl);
  // tdControl = input.required<ControlContainer>()


  get control(): AbstractControl {
    return this.ngControl.control as AbstractControl;
  }
}
