import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() placeholder!: string
  @Input() error!: string
}
