import { Directive } from '@angular/core';

@Directive({
  selector: '[tdInput]',
  host: {
    class: 'input'
  }
})
export class InputDirective {}
