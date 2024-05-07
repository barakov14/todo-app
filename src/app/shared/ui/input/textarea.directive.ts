import {AfterViewInit, Directive, DoCheck, ElementRef, inject, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[ui-textarea]',
  standalone: true
})

export class TextareaDirective implements OnInit, DoCheck {
  private readonly elementRef = inject(ElementRef)
  private readonly renderer = inject(Renderer2)

  private span: HTMLSpanElement | null = null;

  @Input() errorText!: string
  @Input() required!: boolean


  ngOnInit() {
    this.defaultStyles();
  }

  ngDoCheck() {
    if (this.required && this.errorText) {
      this.createErrorSpan();
      this.errorStyles();
    } else {
      this.removeErrorSpan();
    }
  }

  private createErrorSpan() {
    if (!this.span) {
      this.span = this.renderer.createElement('span');
      const text = this.renderer.createText(this.errorText);
      this.renderer.appendChild(this.span, text);
      this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.span);
      this.renderer.setStyle(this.span, 'color', '#EB5757');
      this.renderer.setStyle(this.span, 'margin-top', '7px');
      this.renderer.setStyle(this.span, 'font-size', '14px');
    } else {
      this.renderer.setProperty(this.span, 'textContent', this.errorText);
    }
  }

  private removeErrorSpan() {
    if (this.span) {
      this.renderer.removeChild(this.elementRef.nativeElement.parentNode, this.span);
      this.span = null;
    }
  }

  private errorStyles() {
    const inputElement = this.elementRef.nativeElement;
    this.renderer.addClass(inputElement, 'textarea');
    inputElement.style.border = '1px solid #EB5757';

    inputElement.addEventListener('focus', () => {
      inputElement.style.borderColor = '#EB5757';
    });
  }

  private defaultStyles() {
    const inputElement = this.elementRef.nativeElement;

    this.renderer.addClass(inputElement, 'textarea');
    inputElement.style.border = '1px solid #3B4253';
    inputElement.style.borderRadius = '5px';
    inputElement.style.color = '#E0E0E0';
    inputElement.style.padding = '7px 14px';
    inputElement.style.width = '100%';
    inputElement.style.background = 'none';
    inputElement.style.outline = 'none';

    inputElement.addEventListener('focus', () => {
      inputElement.style.borderColor = '#3B4253';
    });
  }
}
