import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {BadgeDirective} from "./badge.directive";

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [
    BadgeDirective
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() badge!:string
}
