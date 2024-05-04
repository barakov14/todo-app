import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {BadgeDirective} from "./badge.directive";
import {NgClass} from "@angular/common";

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [
    BadgeDirective,
    NgClass
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() badge!:string

  get badgeClasses() {
    return {
      'badge-productivity': this.badge === 'Продуктивность',
      'badge-education': this.badge === 'Образование',
      'badge-health': this.badge === 'Здоровье',
      'badge-urgent': this.badge === 'Срочно'
    };
  }
}
