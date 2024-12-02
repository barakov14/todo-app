import {Directive, ElementRef, inject, model, OnInit} from '@angular/core';

@Directive({
  selector: '[tdButton]',
  host: {
    class: 'td-btn'
  }
})
export class ButtonDirective implements OnInit {
  private readonly button = inject<ElementRef<HTMLButtonElement>>(ElementRef);
  appearance = model<'fill' | 'outline'>('fill');


  ngOnInit() {
    const btnClasses = this.button.nativeElement.classList
    this.appearance() === 'fill' ? btnClasses.add('td-btn-fill') : btnClasses.add('td-btn-outline')
  }
}
