import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-button-filled',
  standalone: true,
  imports: [],
  templateUrl: './button-filled.component.html',
  styleUrl: './button-filled.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonFilledComponent {

}
