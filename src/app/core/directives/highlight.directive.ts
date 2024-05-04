import {Directive, ElementRef, inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";

@Directive({
  selector: '[highlight]',
  standalone: true
})

export class HighlightDirective implements OnChanges {

  private readonly elementRef = inject(ElementRef)

  @Input() search!: string | null;
  originalHTML = ''


  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'].firstChange) {
      this.originalHTML = this.elementRef.nativeElement.innerHTML;
    } else {
      this.highlightText();
    }
  }


  private highlightText() {
    if (!this.originalHTML) return; // если оригинальный HTML пустой или не определен, выходим из функции

    if (!this.search) {
      // Если search пустой или равен null, возвращаем исходный HTML
      this.elementRef.nativeElement.innerHTML = this.originalHTML;
      return;
    }

    const regexp = new RegExp(`(${this.search})`, `gi`);
    this.elementRef.nativeElement.innerHTML = this.originalHTML.replace(
      regexp,
      `<span style="color: #fff; font-weight: bold">$1</span>`
    );
  }
}
