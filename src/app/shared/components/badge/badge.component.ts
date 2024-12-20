import {AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, viewChild} from '@angular/core';

@Component({
    selector: 'td-badge',
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements AfterContentInit{

  content = viewChild.required<ElementRef<HTMLDivElement>>('content')

  ngAfterContentInit() {
    const content = this.content().nativeElement;

    switch (content.innerText) {
      case 'Продуктивность':
        content.classList.add('badge-productivity')
        break;
      case 'Здоровье':
        content.classList.add('badge-health')
        break;
      case 'Образование':
        content.classList.add('badge-education')
        break;
      case 'Срочно':
        content.classList.add('badge-urgent')
        break;
      default:
        content.classList.add('badge-productivity')
        break;
    }
  }
}
