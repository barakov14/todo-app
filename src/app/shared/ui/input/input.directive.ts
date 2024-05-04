import {Directive, ElementRef, inject, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[ui-input]',
  standalone: true
})

export class InputDirective implements OnInit {
  private readonly elementRef = inject(ElementRef)
  private readonly renderer = inject(Renderer2)
  @Input() isTextArea!: boolean
  @Input() errorText!: string


  ngOnInit() {
    // Проверяем required или нет
    const isRequired = this.elementRef.nativeElement.required;
    if (isRequired && this.errorText) {
      this.errorStyles()
      const span = this.renderer.createElement('span');
      const text = this.renderer.createText(this.errorText);
      this.renderer.appendChild(span, text);
      this.renderer.appendChild(this.elementRef.nativeElement.parentNode, span);
      this.renderer.setStyle(span, 'color', '#EB5757')
      this.renderer.setStyle(span, 'margin-top', '7px')
      this.renderer.setStyle(span, 'font-size', '14px')
    }
    if(this.isTextArea) {
      this.textAreaStyles()
    }
    this.defaultStyles();
  }

  private errorStyles() {
    const inputElement = this.elementRef.nativeElement;
    this.renderer.addClass(inputElement, 'input');
    inputElement.style.border = '1px solid #EB5757';

    // Применяем стили для плейсхолдера
    inputElement.placeholderStyle.fontcolor = '#EB5757';

    // Добавляем обработчик для изменения стиля при фокусе
    inputElement.addEventListener('focus', () => {
      inputElement.style.borderColor = '#EB5757';
      inputElement.placeholderStyle.color = '#EB5757';
    });
  }


  private defaultStyles() {
    const inputElement = this.elementRef.nativeElement;

    this.renderer.addClass(inputElement, 'input');
    inputElement.style.border = '1px solid #3B4253';
    inputElement.style.borderRadius = '5px';
    inputElement.style.color = '#E0E0E0';
    inputElement.style.padding = '7px 14px';
    inputElement.style.width = '259px';
    inputElement.style.background = 'none';
    inputElement.style.outline = 'none';

    // Применяем стили для плейсхолдера
    inputElement.placeholderStyle.color = '#676D7D';

    // Добавляем обработчик для изменения стиля при фокусе
    inputElement.addEventListener('focus', () => {
      inputElement.style.borderColor = '#3B4253';
    });
  }
  private textAreaStyles() {
    const inputElement = this.elementRef.nativeElement;

    this.renderer.addClass(inputElement, 'input');

    inputElement.style.paddingBottom = '100px';

  }
}
