import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-button-outline',
  standalone: true,
  imports: [],
  templateUrl: './button-outline.component.html',
  styleUrl: './button-outline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonOutlineComponent {

}
