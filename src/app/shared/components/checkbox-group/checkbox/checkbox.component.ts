import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChild, ElementRef,
  forwardRef,
  inject,
  model,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import {CheckboxGroupComponent} from "../checkbox-group.component";
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {ControlDirective} from "../../../directives/control/control.directive";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'td-checkbox',
  imports: [
    ControlDirective,
    NgTemplateOutlet,
  ],
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
export class CheckboxComponent implements AfterContentInit, ControlValueAccessor {
  readonly checkboxGroup = inject(CheckboxGroupComponent, {
    host: true,
    optional: true
  })

  readonly templateRef = inject(TemplateRef)


  value = model<string>()



  ngAfterContentInit() {
    /*if (this.viewContainerRef. && this.textContent()) {
      this.container()?.clear();
      this.container()?.createEmbeddedView(this.textContent()?.nativeElement)
    }*/

  }


  onChange = (value: string) => {};
  onTouch = () => {};

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  toggleValue(selectedValue: string): void {
    if(this.checkboxGroup) return;
    this.onChange(selectedValue);
    this.onTouch();
  }
}
