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
export class TagComponent implements AfterContentInit {

  content = viewChild.required<ElementRef<HTMLParagraphElement>>('content')
  circleIcon = viewChild.required<ElementRef<HTMLElement>>('circleIcon')


  ngAfterContentInit() {
    const contentText = this.content()?.nativeElement.innerText;

    const circleIconEl = this.circleIcon().nativeElement;


    console.log(contentText);

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
        circleIconEl.classList.add('argent')
        break;
      default:
        circleIconEl.classList.add('productivity')
        break;
    }
  }
}
