import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

}
