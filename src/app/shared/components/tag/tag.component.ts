import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChild, effect,
  ElementRef,
  Input,
  OnInit,
  viewChild
} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'td-tag',
    imports: [],
    templateUrl: './tag.component.html',
    styleUrl: './tag.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  @Input() tag!: string

  content = viewChild.required<ElementRef<HTMLElement>>('content')
  circleIcon = viewChild.required<ElementRef<HTMLElement>>('circleIcon')


  ngOnInit() {
    const contentText = this.content()?.nativeElement.innerText;
    const circleIconEl = this.circleIcon().nativeElement;

    switch (contentText) {
      case 'Продуктивность':
        circleIconEl.classList.add('productivity')
        break;
      case 'Здоровье':
        circleIconEl.classList.add('health')
        break;
      case 'Образование':
        circleIconEl.classList.add('education')
        break;
      case 'Срочно':
        circleIconEl.classList.add('urgent')
        break;
      default:
        circleIconEl.classList.add('productivity')
        break;
    }
  }
}
