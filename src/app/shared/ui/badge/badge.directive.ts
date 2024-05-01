import {Directive, ElementRef, inject, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[badge]',
  standalone: true
})
export class BadgeDirective implements OnInit {
  private readonly elementRef = inject(ElementRef)

  @Input() badge!: string
  constructor() { }

  ngOnInit() {
    this.addBadge();
  }

  private badgeTextColor() {
    switch (this.badge) {
      case 'Продуктивность':
        return '#2772081F';
      case 'Образование':
        return '#28C76F1F';
      case 'Здоровье':
        return '#FF9F431F';
      case 'Срочно':
        return '#EA54551F';
      default:
        return '#fff'
    }
  }

  private badgeBgColor() {
    switch (this.badge) {
      case 'Продуктивность':
        return '#7367F0';
      case 'Образование':
        return '#28C76F';
      case 'Здоровье':
        return '#FF9F43';
      case 'Срочно':
        return '#EA5455';
      default:
        return '#fff'
    }
  }

  private addBadge() {
    const badgeTextColor = this.badgeTextColor()
    const badgeBgColor = this.badgeBgColor()

    const badgeElement = document.createElement('span');
    badgeElement.innerText = this.badge;

    badgeElement.style.backgroundColor = badgeBgColor
    badgeElement.style.color = badgeTextColor
    badgeElement.style.borderRadius = '17px'
    badgeElement.style.padding = '1px 9px'

    this.elementRef.nativeElement.appendChild(badgeElement)
  }
}
